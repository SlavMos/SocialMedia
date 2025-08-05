import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {" "}
      <nav className={s.nav}>
        <div>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
      </nav>
    </div>
  );
}
