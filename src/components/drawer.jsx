import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  List,
  // Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MailIconTwoTone from "@material-ui/icons/MailTwoTone";

import { pages } from "../config/pages.jsx";
export default function DrawerComponent(props) {
  const history = useHistory();

  const list = () => (
    <List>
      {pages.map(({ name, path, icon }) => (
        <ListItem
          button
          key={path}
          onClick={() => {
            history.push(path);
            props.toggleDrawer(false);
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <SwipeableDrawer
        anchor={"bottom"}
        open={props.isOpen}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}

DrawerComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
