import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageThreeChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  growingAge = () => {};

  render() {
    const { age } = this.props.age;
    console.log('in page 3', this.props)
    return (
      <div className="page-three-child">
        <div style={{fontSize:'50px'}}>Nice, {age}!</div>
      </div>
    );
  }
}

export default PageThreeChild;
