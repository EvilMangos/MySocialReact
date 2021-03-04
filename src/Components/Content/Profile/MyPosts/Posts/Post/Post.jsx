import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.Post}>
      <div className={s.photo}>
        <img src="https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg" />
      </div>
      <div className={s.text}>{props.text}</div>
      <div>likes {props.likesCount}</div>
    </div>
  );
};

export default Post;
