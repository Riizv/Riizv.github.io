import React from "react";
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

export default function DrawerComponent(props) {
  const history = useHistory();

  const list = () => (
    <List>
      {[
        {
          name: "Weather Station",
          path: "/weather-station",
          icon: <MailIconTwoTone />,
        },
      ].map(({ name, path, icon }) => (
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
        anchor={"right"}
        open={props.isOpen}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}
