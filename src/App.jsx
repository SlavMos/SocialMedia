import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Content />
      </div>
    </>
  );
}

export default App;
