import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { Router } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";
import "./assets/css/index.css";
//ToDo:
//1. Registration form (First name, last name, email, password,type,number, confirm password)
//2. Login form (email, password)
function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
