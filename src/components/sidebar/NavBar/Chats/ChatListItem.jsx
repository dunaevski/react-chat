import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import Avatar from "../../../Avatar";

const styles = theme => ({
  activeItem: {
    backroundColor: theme.palette.grey[200]
  }
});

function ChatListItem(props) {
  const { classes, disabled, title, chatId, active, createdAt } = props;
  return (
    <ListItem
      button
      component={Link}
      to={`/chat/${chatId}`}
      className={active ? classes.activeItem : ''}
      disabled={disabled}
    >
      <Avatar colorFrom={chatId}>{title}</Avatar>
      <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
    </ListItem>
  );
}

export default withStyles(styles)(ChatListItem);
