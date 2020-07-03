import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import CloudTwoTone from "@material-ui/icons/CloudTwoTone";
import PlayArrowTwoTone from "@material-ui/icons/PlayArrowTwoTone";
import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";

const links = [
  {
    path: "/weather-station",
    icon: <CloudTwoTone fontSize="small" />,
    title: "Weather Station",
    description: "Check temperature and humidity",
  },
  {
    path: "/position",
    icon: <PlaceTwoTone fontSize="small" />,
    title: "Position",
    description: "Check your position",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Home = () => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);

  const handleOnClick = (_path) => {
    setRedirect(true);
    console.log(links[0].path);
  };

  return (
    <Container maxWidth="md">
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {links.map(({ path, icon, title, description }) => (
              <Grid key={path} item>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {path}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {icon} {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      beta
                    </Typography>
                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={path}>
                      <Button onClick={(path) => handleOnClick(path)}>
                        More <PlayArrowTwoTone />
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
