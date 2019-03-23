import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatHeader from "./AppBar/ChatHeader";
import SideBar from "./SideBar/NavBar/SideBar";
import Chat from "./AppBar/MessageContent/Chat";

import { chats, messages } from "../data";

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  }
});

function ChatPage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ChatHeader />
      <SideBar chats={chats} />
      <Chat messages={messages} />
    </div>
  );
}

export default withStyles(styles)(ChatPage);
