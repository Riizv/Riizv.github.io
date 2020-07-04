import React from "react";

import base from "../firebase/base";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";

import { FaTemperatureHigh } from "react-icons/fa";
import { FiCloudDrizzle } from "react-icons/fi";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 5,
  },
  progress: {
    position: "absolute",
    top: "49%",
    left: "49%",
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    textAlign: "center",
  },
};
class WeatherStation extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.ref = base.listenTo("weather-station", {
      context: this,
      then(data) {
        this.setState({
          data,
          isLoading: false,
        });
      },
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        {this.state.isLoading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <Container maxWidth="md">
            <Grid container className={classes.root} spacing={3}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                  <Grid item>
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          <FaTemperatureHigh /> Temperature
                        </Typography>
                      </CardContent>
                      <Divider />
                      <Typography
                        className={classes.pos}
                        variant="h2"
                        component="h2"
                      >
                        {this.state.data.temperature}
                      </Typography>
                    </Card>

                    <Card className={classes.root}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          <FaTemperatureHigh /> Humidity
                        </Typography>
                      </CardContent>
                      <Divider />
                      <Typography
                        className={classes.pos}
                        variant="h2"
                        component="h2"
                      >
                        {this.state.data.humidity}
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        )}
      </>
    );
  }
}
export default withStyles(styles)(WeatherStation);
