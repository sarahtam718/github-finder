import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="navbar bg-primary">
        <Navbar />
      </div>
    );
  }
}

export default App;
