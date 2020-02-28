import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  render() {
    return (
      <div style={{ paddingTop: 200, height: "100vh" }}>
        <div className='login'>
          <input type='text' placeholder='Username' id='username' />
          <input type='password' placeholder='password' id='password' />
          <a href='#' className='forgot'>
            forgot password?
          </a>
          <input type='submit' defaultValue='Sign In' />
        </div>
        <div className='shadow' />
      </div>
    );
  }
}
