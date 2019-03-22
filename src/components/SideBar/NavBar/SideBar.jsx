import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import BottomNav from "./BottomNav";
import ChatList from "../Chats/ChatList";

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    overflow: "scroll",
    height: "100%",
    width: 320
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

class SideBar extends Component {
  render() {
    const { classes, chats } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.drawerHeader}>
          <TextField fullWidth margin="normal" placeholder="Поиск чатов..." />
        </div>
        <Divider />
        <ChatList chats={chats} />
        <BottomNav />
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);
