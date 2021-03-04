import React from "react";
import s from "./Profile.module.css";
import Account from "./Account/Account";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div className={s.Profile}>
      <div className={s.mainImage}>
        <img src="https://www.firestock.ru/wp-content/uploads/2018/05/Grafika-muzyika-volna-fon-Graphics-music-wave-background-5900--2629-700x311.jpg" />
      </div>
      <div className={s.content}>
        <Account />
        <MyPosts
          newPostText={props.state.newPostText}
          posts={props.state.posts}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
