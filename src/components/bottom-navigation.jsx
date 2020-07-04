import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import Zoom from "@material-ui/core/Zoom";

import DrawerComponent from "./drawer";
import { useHistory, useLocation } from "react-router";

import ArrowBackIconTwoTone from "@material-ui/icons/ArrowBackTwoTone";
import SettingsIconTwoTone from "@material-ui/icons/SettingsTwoTone";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

const LabelBottomNavigation = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  let { pathname } = useLocation();

  const toggleDrawer = (status) => (event) => {
    setIsOpen(status);
  };

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <SettingsIconTwoTone />
        </IconButton>
        <Zoom in={pathname !== "/"} timeout={300}>
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            onClick={() => history.push("/")}
          >
            <ArrowBackIconTwoTone />
          </Fab>
        </Zoom>
        <div className={classes.grow} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default LabelBottomNavigation;
