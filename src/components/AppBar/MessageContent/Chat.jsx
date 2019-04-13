import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ChatMessageList from "./ChatMessageList";
import MessageInput from "./MessageInput";

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    marginLeft: 320,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class Chat extends Component {
  render() {
    const {
      classes,
      messages,
      activeChat,
      activeUser,
      joinChat,
      sendMessage
    } = this.props;
    
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ChatMessageList messages={messages} activeUser={activeUser} />
        {activeUser && activeChat && (
          <MessageInput
            sendMessage={sendMessage}
            showJoinButton={!activeUser.isChatMember}
            onJoinButtonClick={() => joinChat(activeChat._id)}
            activeUser={activeUser}
          />
        )}
      </main>
    );
  }
}

export default withRouter(withStyles(styles)(Chat));
