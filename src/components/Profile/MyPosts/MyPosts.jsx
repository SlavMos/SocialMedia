import React, { createRef } from "react";
import { addPostActionCreate } from "../../../redux/state";

export default function MyPosts(props) {
  let newPostElement = React.createRef();

  let addPosts = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreate(text));
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPosts}>Add posts</button>
      </div>
      {props.posts.map((posts) => (
        <div key={posts.id}>
          <div>{posts.message}</div>
          <div>{posts.likesCount}</div>
        </div>
      ))}
      <div>posts</div>
    </div>
  );
}
