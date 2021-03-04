import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.DialogItem}>
            <img src="https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png" />
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;