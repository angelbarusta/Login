import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./Components/Login/login";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2 style={{ margin: 0 }}>React</h2>
      </header>

      <footer className='piedePag'>footer</footer>
    </div>
  );
}

export default App;
