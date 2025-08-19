import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import state, { addPost, subscribe } from "./redux/state.js";

export let rerenderEntireTree = () => {
  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App addPost={addPost} state={state} />
    </BrowserRouter>
  );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
