import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                messagesData={props.state.messagesData}
                dialogsData={props.state.dialogsData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
