import { useState } from "react";
import "./App.css";
import Technologies from "./components/Technologies";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <header className="header">Header</header>
        <nav className="nav">
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Message</a>
          </div>
          <div>
            <a href="">News</a>
          </div>
          <div>
            <a href="">Music</a>
          </div>
          <div>
            <a href="">Settings</a>
          </div>
        </nav>
        <div className="content">
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
      </div>
    </>
  );
}

export default App;
