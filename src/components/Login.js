import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    let LoggedIn = false;
    this.state = {
      Username: "",
      Password: "",
      LoggedIn: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { Username, Password } = this.state;
    if (Username === "saurav" && Password === "saurav97") {
      localStorage.setItem("token", "xxxxxxxxxxxxx");
      this.setState({
        LoggedIn: true,
      });
    }
  }

  render() {
    if (this.state.LoggedIn) {
      return <Redirect to="/admin" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.submitForm} className="login">
            <label>
            <input
            type="text"
            placeholder="Username"
            name="Username"
            value={this.state.Username}
            onChange={this.onChange}
            required
            className="details"
            
          />
            </label>
       
          <br />
          <label>
          <input
            type="Password"
            placeholder="Password"
            name="Password"
            value={this.state.Password}
            onChange={this.onChange}
            required
            className="details"
       
          />
           </label>
          <br />
          <label>
          <input type="checkbox"/> <b>Remember me</b>
          </label>
          <br/>
          <label>
          <input type="submit" className="submit" />
          </label>
          <br />
        </form>
      </div>
    );
  }
}
