import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatMessageList from "./ChatMessageList";
import MessageInput from "./MessageInput";

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: 320,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

class Chat extends Component {
  render() {
    const { classes, messages } = this.props;
    return (
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <ChatMessageList messages={messages} />
        <MessageInput />
      </main>
    );
  }
}

export default withStyles(styles)(Chat);
