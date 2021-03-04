import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  let nameOfClass = `${s.Message} ${props.my ? s.me : s.notMe}`;
  return (
    <div className={nameOfClass}>
      <div className={s.Message__text}>{props.message}</div>
    </div>
  );
};

export default Message;
