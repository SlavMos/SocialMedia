import React from "react";

export default function MyPosts(props) {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea name="" id=""></textarea>
      </div>
      <div>
        <button>Add posts</button>
      </div>
      {props.posts.map((posts) => (
        <div key={posts.id}>{posts.message}</div>
      ))}
      <div>posts</div>
    </div>
  );
}
