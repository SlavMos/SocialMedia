import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>
          {props.dialogsState.dialogsData.map((dialogs) => (
            <div className={s.item} key={dialogs.id}>
              <NavLink to={`/dialogs/${dialogs.id}`}>{dialogs.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className={s.messages}>
        {props.dialogsState.messagesData.map((messages) => (
          <div className={s.dialog} key={messages.id}>
            <div>{messages.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
