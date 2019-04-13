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
    searchValue: "",
    activeTab: 0
  };

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  filterChats = chats => {
    const { searchValue } = this.state;
    return chats
      .filter(chat =>
        chat.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  };

  render() {
    const { classes, chats, createChat, isConnected } = this.props;
    const { activeTab, searchValue } = this.state;

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
          <TextField
            fullWidth
            margin="normal"
            placeholder="Поиск чатов..."
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </div>
        <Divider />

        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.all : chats.my)}
          activeChat={chats.active}
        />

        <NewChatButton onClick={createChat} disabled={!isConnected }/>

        <BottomNavigation
          value={activeTab}
          onChange={this.handleTabChange}
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
