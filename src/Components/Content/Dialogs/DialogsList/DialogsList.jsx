import React from "react";
import s from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) => {
    let dialogsElements = props.dialogs.map((dialog) => (<li><DialogItem id={dialog.id} name={dialog.name}/></li>))
    return (
            <div className={s.DialogsList}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
    )
}

export default DialogsList;