import React from "react";
import s from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  return (
    <div className={s.Dialogs}>
      <DialogsList dialogs={props.state.dialogs} />
      <Messages
        state={props.state.messages}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default Dialogs;
