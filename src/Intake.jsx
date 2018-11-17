import React, { Component } from "react";
import PageOne from "./PageOne.jsx";
import PageTwoChild from "./PageTwoChild.jsx";
import PageThreeChild from "./PageThreeChild.jsx";
import PageFourChild from "./PageFourChild.jsx";
import PageFiveChild from "./PageFiveChild.jsx";
import PageSixChild from "./PageFiveChild.jsx"
import "./App.css";
import axios from 'axios';

class Intake extends Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 1, age: 0, ageRange: 0 };
  }

  componentDidMount() {
    fetch("http://localhost:9000/userid")
      .then(response => response.json())
      .then(response =>
        this.setState({ userId: response.userId }, () => {
          console.log(this.state);
        })
      );
  }

  postUserObjectToServer = () => {

    axios.post('http://localhost:9000/user', this.state).then(console.log).catch(console.error('Error'))
   
    // fetch("http://localhost:9000/user", {
    //   method: "POST",
    //   headers: new Headers(),
    //   mode: "cors",
    //   credentials: 'same-origin',
    //   body: JSON.stringify(this.state)
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  };
  setAgeRange = ageRange => {
    console.log("in setAgeRange");
    this.setState({ ageRange: ageRange, pageIndex: 2 }, () => {
      this.postUserObjectToServer();
      this.pageHandler();
    });
  };
  setAge = age => {
    console.log("in setAge");
    this.setState({ age: age, pageIndex: 3 }, () => {
      this.postUserObjectToServer();
      this.pageHandler();
    });
  };

  setStateValue = (key, value) => {
    console.log("in setState value");
    this.setState({ [key]: value}, () => {
      this.postUserObjectToServer();
      this.pageHandler();
      console.log(this.state)
    });
  }
 
  setPageIndex = index => {
    this.setState({ pageIndex: index });
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
      return this.pageHandlerChild();
    } else {
      this.pageHandlerAdolescent();
    }
  };
  pageHandlerChild = () => {
    console.log("in page handler child", this.state);
    switch (this.state.pageIndex) {
      case 3:
        console.log("in case 3");
        return (
          <PageThreeChild
            age={this.state.age}
            setPageIndex={this.setPageIndex}
          />
        );
      case 4:
        console.log("in case 4");
        return (
          <PageFourChild
            age={this.state.age}
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
          />
        );
        case 5:
        console.log("in case 5");
        return (
          <PageFiveChild
            
            setStateValue={this.setStateValue}
          />
        );
        case 6:
        console.log("in case 6");
        return (
          <PageSixChild
            
            setStateValue={this.setStateValue}
          />
        );
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
