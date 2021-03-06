import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export let rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost().bind(store)}
        updateNewPostText={store.updateNewPostText().bind(store)}
        updateNewMessageText={store.updateNewMessageText().bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store);

reportWebVitals();
