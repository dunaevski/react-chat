import React from "react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/ru";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import Avatar from "../../Avatar";

import senderName from "../../../utils/sender-name";
import randomColor from "../../../utils/color-from";

const styles = theme => ({
  messageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  messageWrappperFromMe: {
    justifyContent: "flex-end"
  },
  message: {
    maxWidth: "70%",
    minWidth: "10%",
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: "#e6dcff"
  },
  statusMessage: {
    width: "100%",
    textAlign: "center"
  },
  statusMessageUser: {
    display: "inline"
  }
});

function ChatMessage(props) {
  const {
    classes,
    content,
    sender,
    activeUser,
    createdAt,
    statusMessage
  } = props;

  const isMessageFromMe = sender._id === activeUser._id;
  const displayedName = senderName(sender);
  

  if (statusMessage) {
    return (
      <div className={classes.messageWrapper}>
        <Typography className={classes.statusMessage}>
          <Typography
            variant="caption"
            style={{ color: randomColor(sender._id) }}
            className={classes.statusMessageUser}
          >
            {displayedName}
          </Typography>
          {content}
          <Typography variant="caption" component="span">
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }

  const userAvatar = <Avatar colorFrom={sender._id}>{displayedName}</Avatar>;

  return (
    <div
      className={classNames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrappperFromMe
      )}
    >
      {!isMessageFromMe && userAvatar}
      <Paper
        className={classNames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}
      >
        <Typography
          variant="caption"
          style={{ color: randomColor(sender._id) }}
        >
          {displayedName}
        </Typography>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="caption" className={classes.time}>
          {moment(createdAt).fromNow()}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
}

export default withStyles(styles)(ChatMessage);
