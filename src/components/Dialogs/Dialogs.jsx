import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function Dialogs() {
  let dialogsData = [
    { id: 1, name: "Bla" },
    { id: 2, name: "Bla" },
    { id: 3, name: "Bla" },
    { id: 4, name: "Blass" },
    { id: 5, name: "Bla" },
  ];

  let messagesData = [
    { id: 1, text: "hello" },
    { id: 2, text: "hello" },
    { id: 3, text: "hello" },
    { id: 4, text: "hello" },
    { id: 5, text: "hello moto" },
  ];
  <NavLink to="/dialogs/1">Veo </NavLink>;
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>
          {dialogsData.map((dialogs) => (
            <div className={s.item} key={dialogs.id}>
              <NavLink to={`/dialogs/${dialogs.id}`}>{dialogs.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className={s.messages}>
        {messagesData.map((messages) => (
          <div className={s.dialog} key={messages.id}>
            {messages.text}
          </div>
        ))}
      </div>
    </div>
  );
}
