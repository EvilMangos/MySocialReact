import React from "react";
import s from "./NewMessage.module.css";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let updateNewMessageText = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={s.NewMessage}>
      <textarea
        className={s.NewMessage__field}
        placeholder="Enter your message..."
        ref={newMessageElement}
        onChange={updateNewMessageText}
        value={props.newMessageText}
      ></textarea>
      <button className={s.NewMessage__send}>Send</button>
    </div>
  );
};

export default NewMessage;
