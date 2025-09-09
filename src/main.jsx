import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state.js";

const container = document.getElementById("root");
const root = createRoot(container);

const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App state={state} store={store} />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
