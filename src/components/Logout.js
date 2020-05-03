import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div>
        <h1 className="header">You have been logged out !!!</h1>
        <Link to="/" className="login">
          <button type="button"className="loginagain">LOGIN AGAIN</button>
        </Link>
      </div>
    );
  }
}
