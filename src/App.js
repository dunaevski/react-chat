import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatHeader from "./components/AppBar/ChatHeader";
import SideBar from "./components/SideBar/NavBar/SideBar";
import Chat from "./components/AppBar/MessageContent/Chat"

import { chats, messages } from "./data";

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ChatHeader />
        <SideBar chats={chats} />
        <Chat messages={messages}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
