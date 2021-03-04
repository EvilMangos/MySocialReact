import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Content/Profile/Profile";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  debugger;
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <NavBar />
        </div>
        <div className="content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                updateNewMessageText={props.updateNewMessageText}
              />
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
