import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";
import NewChatButton from "./NewChatButton";
import ChatList from "./Chats/ChatList";


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
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: 320
  }
});

class SideBar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, chats } = this.props;
    const { value } = this.state;

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

        {value === 0 && <ChatList chats={chats} />}
        {/* {value === 1 && <Test chats={chats}/>} */}

        <NewChatButton />

        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction label="Все" icon={<ExploreIcon />} />
          <BottomNavigationAction label="Поледние" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);
