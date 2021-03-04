import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.NewPost}>
      <textarea
        onChange={updateNewPostText}
        ref={newPostElement}
        placeholder="Write something ..."
        value={props.newPostText}
      />
      <button onClick={addPost}>Send</button>
    </div>
  );
};

export default NewPost;
