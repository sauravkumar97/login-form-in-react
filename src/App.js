import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/logout" component={Logout}></Route>
      </Switch>
    );
  }
}

export default App;
