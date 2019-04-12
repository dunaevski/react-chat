import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatHeader from "./appbar/ChatHeader";
import SideBar from "./sidebar/NavBar/SideBar";
import Chat from "./appbar/MessageContent/Chat";

import { messages } from "../data";

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  }
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([fetchMyChats(), fetchAllChats()]);
  }

  render() {
    const { classes, chats } = this.props;

    return (
      <div className={classes.root}>
        <ChatHeader />
        <SideBar chats={chats} />
        <Chat messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
