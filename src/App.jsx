import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import state from "./redux/state";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                dispatch={props.dispatch}
                profileState={props.state.profileData}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogsState={props.state.dialogsPage}
                store={props.store}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
