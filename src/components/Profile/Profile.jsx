import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
export default function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2jToXV1BO7wM2RqCbNG4uvzQfSTBvrAarQ&s"
          alt=""
        />
      </div>
      <div>Ava+description</div>
      <MyPosts />
    </div>
  );
}
