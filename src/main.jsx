import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
let dialogsData = [
  { id: 1, name: "Bla" },
  { id: 2, name: "Bla" },
  { id: 3, name: "Bla" },
  { id: 4, name: "Blddddass" },
  { id: 5, name: "Bla" },
];

let messagesData = [
  { id: 1, text: "hello" },
  { id: 2, text: "hello" },
  { id: 3, text: "hello" },
  { id: 4, text: "hello" },
  { id: 5, text: "hello moto" },
];
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App dialogsData={dialogsData} messagesData={messagesData} />
  </BrowserRouter>
);
