import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIconTwoTone from "@material-ui/icons/InboxTwoTone";
import MailIconTwoTone from "@material-ui/icons/MailTwoTone";

export default function DrawerComponent(props) {
  const list = () => (
    <>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIconTwoTone /> : <MailIconTwoTone />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIconTwoTone /> : <MailIconTwoTone />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
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
