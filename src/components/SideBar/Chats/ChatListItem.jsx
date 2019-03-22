import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "../../Avatar";

const styles = theme => ({
  // ...
});

function ChatListItem(props) {
  const { chat } = props;
  return (
    <ListItem button>
      <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
      <ListItemText primary={chat.title} />
    </ListItem>
  );
}

export default withStyles(styles)(ChatListItem);
