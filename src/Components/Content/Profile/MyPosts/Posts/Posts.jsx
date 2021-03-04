import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post text={post.text} likesCount={post.likesCount} />
  ));
  return <div className={s.Posts}>{postsElements}</div>;
};

export default Posts;
