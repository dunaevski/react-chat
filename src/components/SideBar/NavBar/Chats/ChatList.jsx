import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ChatListItem from "./ChatListItem";

const styles = theme => ({
  chatsList: {
    position: "releative",
    height: "calc(100% - 56px)",
    overflow: "scroll",
    paddingBottom: 50
  }
});

function FolderList(props) {
  const { classes, chats } = props;
  return (
    <List className={classes.chatsList}>
      {chats &&
        chats.map((chat, index) => <ChatListItem key={index} chat={chat} />)}
    </List>
  );
}

export default withStyles(styles)(FolderList);
