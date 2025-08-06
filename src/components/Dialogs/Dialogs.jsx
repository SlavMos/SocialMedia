import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
export default function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>
          <NavLink to="/dialogs/1">Veo </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/2">Veo </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/3">Veo </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/4">Veo </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs/5">Veo </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>hello</div>
        <div className={s.dialog}>hello</div>
        <div className={s.dialog}>hello</div>
        <div className={s.dialog}>hello</div>
        <div className={s.dialog}>hello</div>
      </div>
    </div>
  );
}
