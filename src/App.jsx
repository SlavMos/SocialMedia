import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
      </div>
    </>
  );
}

export default App;
