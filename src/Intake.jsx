import React, { Component } from "react";
import PageOne from "./PageOne.jsx";
import PageTwoChild from "./PageTwoChild.jsx";
import PageThreeChild from "./PageThreeChild.jsx";
import "./App.css";

class Intake extends Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 1, age: 0, ageRange: 0 };
  }

  setAgeRange = ageRange => {
    console.log("in setAgeRange");
    this.setState({ ageRange: ageRange, pageIndex: 2 }, () => {
      console.log(this.state);
      this.pageHandler();
    });
  };
  setAge = age => {
    console.log("in setAge");
    this.setState({ age: age, pageIndex: 3 }, () => {
      this.pageHandler();
    });
  };
  pageHandler = () => {
    console.log("in page handler");
    const { age, ageRange } = this.state;
    if (age === 0 && ageRange === 0) {
      return <PageOne setAgeRange={this.setAgeRange} />;
    } else if (age === 0 && ageRange === "child") {
      return <PageTwoChild setAge={this.setAge} />;
    } else if (age === 0 && ageRange === "adolescent") {
      this.pageHandlerAdolescent();
    } else if (age === 0 && ageRange === "adult") {
      this.pageHandlerAdult();
    } else if (age < 10) {
    return  this.pageHandlerChild();
    } else {
      this.pageHandlerAdolescent();
    }
  };
  pageHandlerChild = () => {

    console.log("in page handler child", this.state);
    switch (this.state.pageIndex) {
      case 3:
        console.log("in case 3");
        return <PageThreeChild age={this.state.age} />;
      default:
        console.log("page handler in impossible index");
    }
  };
  pageHandlerAdolescent = () => {
    // switch (this.state.pageIndex) {
    //   case 3:
    //     return <PageTwo />;
    // }
  };
  pageHandlerAdult = () => {
    // switch (this.state.pageIndex) {
    //   case 3:
    //     return <PageTwo />;
    // }
  };

  clickHandler = () => {};
  render() {
    return <div className="intake-root-div">{this.pageHandler()}</div>;
  }
}

export default Intake;
