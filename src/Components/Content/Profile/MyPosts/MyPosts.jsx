import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  return (
    <div className={s.MyPosts}>
      My Posts
      <NewPost
        newPostText={props.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
      <Posts posts={props.posts} />
    </div>
  );
};

export default MyPosts;
