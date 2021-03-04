import React from "react";
import MessagesList from "./MessageList/MessagesList";
import s from "./Messages.module.css";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {
  return (
    <div className={s.Messages}>
      <MessagesList messagesList={props.state.messagesList} />
      <NewMessage
        newMessageText={props.NewMessageText}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default Messages;
