import React from "react";
import { withStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Typography,
  Button,
  TextField
} from "@material-ui/core/";

const styles = theme => ({
  modalWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: "30%",
    minWidth: "300px",
    padding: theme.spacing.unit * 3
  }
});

class UserMenu extends React.Component {
  state = {
    isModalOpen: false,
    anchorEl: null,
    username: "",
    firstName: "",
    lastName: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName
    });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleEditProfileModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.handleClose();
  };

  handleSaveClick = () => {
    this.props.onEditProfileClick({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
    this.toggleEditProfileModal();
  };

  handleLogoutClick = () => {
    this.props.onLogoutClick();
    this.handleClose();
  };

  render() {
    const { anchorEl, isModalOpen } = this.state;
    const { classes, disabled } = this.props;

    return (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          disabled={disabled}
          onClick={this.handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.toggleEditProfileModal}>
            Редакитровать Профиль
          </MenuItem>
          <MenuItem onClick={this.handleLogoutClick}>Выйти</MenuItem>
        </Menu>
        <Modal
          open={isModalOpen}
          className={classes.modalWrapper}
          onClose={this.toggleEditProfileModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Редакитровать Профиль
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Логин"
              placeholder="Введите ваш логин..."
              type="text"
              margin="normal"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="firstName"
              label="Имя"
              placeholder="Введите имя..."
              type="text"
              margin="normal"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Фамилия"
              placeholder="Введите вашу фамилию..."
              type="text"
              margin="normal"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
            <Button color="primary" onClick={this.handleSaveClick}>
              Сохранить
            </Button>
            <Button onClick={this.toggleEditProfileModal}>Закрыть</Button>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(UserMenu);
