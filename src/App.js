import React, { Component } from "react";
import logo from "./logo.svg";
import Intake from "./Intake.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  clickHandler = () => {};
  render() {
    return (
      <div className="root-div">
        <Intake />
      </div>
    );
  }
}

export default App;
