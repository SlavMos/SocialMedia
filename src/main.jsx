import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state.js"; // импортируем store

let rerenderEntireTree = (state) => {
  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)} // привязали контекст
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

// подписка
store.subscribe(rerenderEntireTree);
