import React, { Component } from "react";
import PageOne from "./PageOne.jsx";
import PageTwoChild from "./PageTwoChild.jsx";
import PageThreeChild from "./PageThreeChild.jsx";
import PageFourChild from "./PageFourChild.jsx";
import PageFiveChild from "./PageFiveChild.jsx";
import PageSixChild from "./PageSixChild.jsx";
import PageSevenChild from "./PageSevenChild.jsx";
import PageEightChild from "./PageEightChild.jsx";
import QueueCounter from "./QueueCounter";
import PageNineChild from "./PageNineChild.jsx";
import PageTenChild from "./PageTenChild.jsx";
import PageElevenChild from "./PageElevenChild.jsx";
import "./App.css";

class Intake extends Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 1, age: 0, ageRange: 0 };
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = event => {
      console.log("WS CONNECTED");
    };
    this.socket.onmessage = e => {
      const incoming = JSON.parse(e.data);
      switch (incoming.type) {
        case "id":
          this.setState({ userId: incoming.id });
          break;
        case "updateCount":
          this.setState({ queueSize: incoming.count });
          break;
        default:
          console.log("INCOMING DATA NOT RECOGNIZED");
      }
    };
  }

  postUserObjectToServer = () => {
    // this.socket.send(JSON.stringify(this.state))
  };
  setStateValue = (key, value) => {
    console.log("in setState value");
    this.setState({ [key]: value, pageIndex: this.state.pageIndex + 1 }, () => {
      this.postUserObjectToServer();
      this.pageHandler();
      console.log(this.state);
    });
  };

  setTwoStateValues = (key, value, keyTwo, valueTwo) => {
    this.setState(
      { [key]: value, [keyTwo]: valueTwo, pageIndex: this.state.pageIndex + 1 },
      () => {
        this.postUserObjectToServer();
        this.pageHandler();
        console.log(this.state);
      }
    );
  };
  setPageIndex = index => {
    this.setState({ pageIndex: index });
  };
  pageHandler = () => {
    const { age, ageRange } = this.state;
    if (age === 0 && ageRange === 0) {
      return <PageEightChild setStateValue={this.setStateValue} />;
    } else if (age === 0 && ageRange === "child") {
      return <PageTwoChild setStateValue={this.setStateValue} />;
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
    switch (this.state.pageIndex) {
      case 3:
        return (
          <PageThreeChild
            age={this.state.age}
            setPageIndex={this.setPageIndex}
          />
        );
      case 4:
        return (
          <PageFourChild
            age={this.state.age}
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
          />
        );
      case 5:
        return (
          <PageFiveChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
          />
        );
      case 6:
        return (
          <PageSixChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
          />
        );
      case 7:
        return (
          <PageSevenChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
            currentIndex={this.state.pageIndex}
          />
        );
      case 8:
        return (
          <PageEightChild
            setPageIndex={this.setPageIndex}
            setTwoStateValues={this.setTwoStateValues}
            name={this.state.name}
          />
        );
      case 9:
        return (
          <PageNineChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
          />
        );
      case 10:
        return (
          <PageTenChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
          />
        );
      case 11:
        return (
          <PageElevenChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
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
    return (
      <div className="intake-root-div">
        {this.pageHandler()}
        <QueueCounter count={this.state.queueSize} />
      </div>
    );
  }
}

export default Intake;
