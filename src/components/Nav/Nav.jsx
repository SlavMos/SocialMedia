import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Dialogs</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">News</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Music</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Settings</NavLink>
      </div>
    </nav>
  );
}
