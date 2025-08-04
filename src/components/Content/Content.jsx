import React from "react";
import s from "./Content.module.css";
export default function Content() {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2jToXV1BO7wM2RqCbNG4uvzQfSTBvrAarQ&s"
          alt=""
        />
      </div>
      <div>Ava+description</div>
      <div>
        My Posts
        <div>New Posts</div>
        <div>
          <div>post1</div>
          <div>post2</div>
          <div>post3</div>
          <div>post4</div>
        </div>
      </div>
    </div>
  );
}
