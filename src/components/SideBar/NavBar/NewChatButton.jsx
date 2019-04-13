import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Fab,
  Modal,
  Paper,
  Typography,
  TextField,
  Button
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
    margin: theme.spacing.unit
  },
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

class NewChatButton extends React.Component {
  state = {
    open: false,
    title: {
      value: "",
      isValid: true
    }
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  handleTitleChange = event => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true
      }
    });
  };

  handleCreateClick = event => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.value) {
      this.setState({
        title: {
          value: title.value,
          isValid: false
        }
      });

      return;
    }

    this.props.onClick(title.value);
    this.toggleModal();
    this.setState({
      title: {
        value: "",
        isValid: true
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { open, title } = this.state;

    return (
      <>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.toggleModal}>
          <AddIcon />
        </Fab>
        <Modal
          open={open}
          className={classes.modalWrapper}
          onClose={this.toggleModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Создать новый чат
            </Typography>
            <TextField
              required
              fullWidth
              label="Новый чат"
              placeholder="Введите название чата..."
              type="text"
              margin="normal"
              autoComplete="new-chat"
              value={title.value}
              onChange={this.handleTitleChange}
              error={!title.isValid}
            />
            <Button color="primary" onClick={this.handleCreateClick}>
              Создать
            </Button>
          </Paper>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles)(NewChatButton);
