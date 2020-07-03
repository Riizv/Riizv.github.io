import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import ArrowBackIconTwoTone from "@material-ui/icons/ArrowBackTwoTone";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FloatingBackButton = ({ history }) => {
  const classes = useStyles();

  return (
    <Fab
      aria-label="Back"
      color="primary"
      variant="extended"
      className={classes.fab}
      onClick={() => history.goBack()}
    >
      <ArrowBackIconTwoTone className={classes.extendedIcon} /> Back
    </Fab>
  );
};

export default withRouter(FloatingBackButton);
