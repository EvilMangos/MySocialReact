import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="#">News</NavLink>
        </li>
        <li>
          <NavLink to="#">Music</NavLink>
        </li>
        <li>
          <NavLink to="#">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
