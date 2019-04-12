import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatMessage from "./ChatMessage";

const styles = theme => ({
  messagesWrapper: {
    // overflowX: "scroll",
    // position: "absolute",
    // height: "100%",
    // width: "100%",
    // paddingTop: theme.spacing.unit * 3,
    paddingBottom: "100px"
  }
});

class ChatMessageList extends Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }
  render() {
    const { classes, messages } = this.props;
  
    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
    );
  }
}
export default withStyles(styles)(ChatMessageList);
