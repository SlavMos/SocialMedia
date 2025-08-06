import React from "react";
import s from "./Dialogs.module.css";
export default function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.items}>
        <div className={s.item}>Veo</div>
        <div className={s.item}>Neo</div>
        <div className={s.item}>Leo</div>
        <div className={s.item}>Deo</div>
        <div className={s.item}>Seo</div>
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
