import React from "react"; 
import { withStyles } from "@material-ui/core/styles";
import ChatListItem from "./ChatListItem";
import { Typography, List } from "@material-ui/core";

const styles = theme => ({
  chatsList: {
    position: "releative",
    height: "calc(100% - 56px)",
    overflow: "scroll",
    paddingBottom: 50
  },
  noChats: {
    textAlign: "center"
  }
});

function ChatList(props) {
  const { classes, chats, activeChat } = props;
  return (
    <List className={classes.chatsList}>
      {chats && chats.length ? (
        chats.map(chat => (
          <ChatListItem
            key={chat._id}
            active={activeChat && activeChat._id === chat._id}
            chatId={chat._id}
            {...chat}
          />
        ))
      ) : (
        <Typography variant="subheading" className={classes.noChats}>
          Тут пока нет чатов....
        </Typography>
      )}
    </List>
  );
}

export default withStyles(styles)(ChatList);
