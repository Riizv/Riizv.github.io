import React from "react";

import base from "../firebase/base";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import OpacityTwoToneIcon from "@material-ui/icons/OpacityTwoTone";
import LinearProgress from "@material-ui/core/LinearProgress";
import { FaTemperatureHigh } from "react-icons/fa";

import Chart from "../components/chart";

const styles = {
  root: {},
  progress: {
    position: "absolute",
    top: "49%",
    left: "49%",
  },
  card: {},
  title: {
    fontSize: 14,
  },
  pos: {},
  cardHeight: {
    height: 120,
    paddingBottom: 60,
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
              <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                  <CardContent className={classes.cardHeight}>
                    <Typography variant="h5" component="h2">
                      <FaTemperatureHigh /> Temperature{" "}
                      {this.state.data.temperature}
                    </Typography>
                      <Chart value={this.state.data.temperature} />
                  </CardContent>
                  <LinearProgress
                    variant="determinate"
                    value={this.state.data.temperature}
                  />
                </Card>
              </Grid>
              {/*  */}
              <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                  <CardContent className={classes.cardHeight}>
                    <Typography variant="h5" component="h2">
                      <OpacityTwoToneIcon /> Humidity {this.state.data.humidity}
                    </Typography>
                    <Chart value={this.state.data.temperature} />
                  </CardContent>
                  <LinearProgress
                    variant="determinate"
                    value={this.state.data.humidity}
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>
        )}
      </>
    );
  }
}
export default withStyles(styles)(WeatherStation);
