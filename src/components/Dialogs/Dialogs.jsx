import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function Dialogs(props) {
  <NavLink to="/dialogs/1">Veo </NavLink>;
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>
          {props.dialogsData.map((dialogs) => (
            <div className={s.item} key={dialogs.id}>
              <NavLink to={`/dialogs/${dialogs.id}`}>{dialogs.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className={s.messages}>
        {props.messagesData.map((messages) => (
          <div className={s.dialog} key={messages.id}>
            {messages.text}
          </div>
        ))}
      </div>
    </div>
  );
}
