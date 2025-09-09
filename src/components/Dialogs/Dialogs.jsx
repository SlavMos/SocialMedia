import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreate,
  updateNewMessageBodyCreator,
} from "../../redux/state";

export default function Dialogs(props) {
  // Отправка сообщения
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreate());
  };

  // Печать в textarea
  const onNewMessageChange = (e) => {
    const body = e.target.value; // берём весь текст
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        {props.dialogsState.dialogsData.map((dialog) => (
          <div className={s.item} key={dialog.id}>
            <NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
          </div>
        ))}
      </div>

      <div className={s.messages}>
        {props.dialogsState.messagesData.map((message) => (
          <div className={s.dialog} key={message.id}>
            {message.text}
          </div>
        ))}

        <div className={s.newMessage}>
          <textarea
            value={props.dialogsState.newMessageBody} // полностью синхронизировано
            onChange={onNewMessageChange}
            placeholder="Enter Your Message"
          />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}
