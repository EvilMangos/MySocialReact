import React from "react";
import s from "./MessagesList.module.css";
import Message from "./Message/Message";

const MessagesList = (props) => {
  let messagesElements = props.messagesList.map((message) => (
    <Message message={message.message} my={message.my} />
  ));
  return <div className={s.MessagesList}>{messagesElements}</div>;
};

export default MessagesList;
