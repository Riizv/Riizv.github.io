import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIconTwoTone from "@material-ui/icons/MenuTwoTone";
import SettingsIconTwoTone from "@material-ui/icons/SettingsTwoTone";

import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

const AppBarTop = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (status) => (event) => {
    setIsOpen(status);
  };

  return (
    <div className={classes.root}>
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIconTwoTone />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Riizv
          </Typography>
          <IconButton
            edge="end"
            aria-label="settings"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <SettingsIconTwoTone />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
