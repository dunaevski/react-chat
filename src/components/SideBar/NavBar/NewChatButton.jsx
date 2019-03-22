import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
    margin: theme.spacing.unit
  }
});

function NewChatButton(props) {
  const { classes } = props;
  return (
    <Fab color="primary" aria-label="Add" className={classes.fab}>
      <AddIcon />
    </Fab>
  );
}

export default withStyles(styles)(NewChatButton);
