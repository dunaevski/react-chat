import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ChatHeader from './appbar/ChatHeader'
import SideBar from "./sidebar/NavBar/SideBar";
import Chat from "./appbar/MessageContent/Chat";
import ErrorMessage from "./ErrorMessage";

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  }
});

class ChatPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({ params: PropTypes.object.isRequired }).isRequired,
    fetchAllChats: PropTypes.func.isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired
    }).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired
    }).isRequired,
    createChat: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        chatId: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        sender: PropTypes.object.isRequired,
        createdAt: PropTypes.string.isRequired
      })
    ).isRequired,
    editUser: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired
  };

  static defaultProps = {
    error: null,
  };

  componentDidMount() {
    const {
      match,
      fetchAllChats,
      fetchMyChats,
      setActiveChat,
      socketsConnect,
      mountChat
    } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;

        // If we pass a chatId, then fetch messages from chat
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
      unmountChat,
      mountChat
    } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }

  render() {
    const {
      classes,
      chats,
      logout,
      activeUser,
      createChat,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      messages,
      editUser,
      error,
      isConnected
    } = this.props;

    return (
      <div className={classes.root}>
        <ChatHeader
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
          isConnected={isConnected}
        />
        <SideBar
          chats={chats}
          createChat={createChat}
          isConnected={isConnected}
        />

        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
          isConnected={isConnected}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
