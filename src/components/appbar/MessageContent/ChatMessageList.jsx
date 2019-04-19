import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core/";
import ChatMessage from "./ChatMessage";

const styles = theme => ({
  messagesWrapper: {
    // overflowX: "scroll",
    // position: "absolute",
    // height: "100%",
    // width: "100%",
    // paddingTop: theme.spacing.unit * 3,
    paddingBottom: "100px"
  },
  noMessagesWrapper: {
    width: "100%",
    paddingTop: 320,
    paddingBottom: 320
  },
  paper: {
    padding: theme.spacing.unit * 3
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
      console.log('====================================');
    console.log( messagesWrapper.scrollHeight);
    console.log('====================================');
    }
    
  }
  render() {
    const { classes, messages, match, activeUser } = this.props;

    // If there's no active chat, then show a tip
    if (!match.params.chatId) {
      return (
        <div className={classes.noMessagesWrapper}>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Typography variant="display1" gutterBottom>
                Начать общаться…
              </Typography>
              <Typography variant="body1" gutterBottom>
                Используйте <strong>ВСЕ</strong> чтобы увидеть все чаты.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Используйте <strong>ПОСЛЕДНИЕ</strong> чтобы увидеть последнии
                сообщения.
              </Typography>
            </Paper>
          </Grid>
        </div>
      );
    }

    return messages && messages.length ? (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} activeUser={activeUser} />
        ))}
      </div>
    ) : (
      <div className={classes.noMessagesWrapper}>
        <Grid container justify="center">
          <Typography variant="display1">Тут пока нет сообщений...</Typography>
        </Grid>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(ChatMessageList));
