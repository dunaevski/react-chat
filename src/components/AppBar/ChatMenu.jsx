import React, { Component } from "react";
import MoreIcon from "@material-ui/icons/MoreVert";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

class ChatMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLeaveClick = () => {
    this.handleClose();
    this.props.onLeaveClick();
  };

  handleDeleteClick = () => {
    this.handleClose();
    this.props.onDeleteClick();
  };

  render() {
    const { activeUser, disabled } = this.props; 
    const { anchorEl } = this.state;

    if (!activeUser.isChatMember) {
      return null;
    }
    
    return (
      <>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          disabled={disabled}
          onClick={this.handleClick}
        >
          <MoreIcon />
        </IconButton>
        <Menu
           id="simple-menu"
           anchorEl={anchorEl}
           open={Boolean(anchorEl)}
           onClose={this.handleClose}
        >
          {activeUser.isMember && (
            <MenuItem onClick={this.handleLeaveClick}>Покинуть чат</MenuItem>
          )}
          {activeUser.isCreator && (
            <MenuItem onClick={this.handleDeleteClick}>Удалить чат</MenuItem>
          )}
        </Menu>
      </>
    );
  }
}

export default ChatMenu;
