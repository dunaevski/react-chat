import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Input, Paper } from "@material-ui/core";

const styles = theme => ({
  messageInputWrapper: {
    position: "fixed",
    left: "auto",
    right: 0,
    bottom: 0,
    width: `calc(97% - 320px)`,
    padding: theme.spacing.unit * 3
  },
  messageInput: {
    padding: theme.spacing.unit * 2
  }
});

class MessageInput extends Component {
  state = {
    value: ""
  };

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleKeyPress = event => {
    const { value } = this.state;

    if (event.key === "Enter" && value) {
      this.props.sendMessage(value);
      this.setState({ value: "" });
    }
  };
  render() {
    const { classes, showJoinButton, onJoinButtonClick, disabled } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          {showJoinButton ? (
            <Button
              disabled={disabled}
              fullWidth
              variant="contained"
              color="primary"
              onClick={onJoinButtonClick}
            >
              Присоедениться
            </Button>
          ) : (
            <Input
              disabled={disabled}
              fullWidth
              placeholder="Введите сообщение…"
              value={this.state.value}
              onChange={this.handleValueChange}
              onKeyPress={this.handleKeyPress}
            />
          )}
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(MessageInput);
