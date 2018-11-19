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
import StartChatPage from "./StartChatPage.jsx"
import "./App.css";

class Intake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      age: 0,
      ageRange: 0,
      type: 'user',
      time: new Date(),
      queueSize: 100,
      chat: false,
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:9000')
    this.socket.onopen = event => {
      console.log("WS CONNECTED");
    };

    this.socket.onmessage = e => {
      const incoming = JSON.parse(e.data);
      switch (incoming.type) {
        case "id":
          this.setState({ userId: incoming.id });
          break;
        case 'updateCount':
          if (incoming.count < this.state.queueSize) {
            this.setState({queueSize: incoming.count});
          }
          break;
        case 'startChat':
          if (incoming.id === this.state.userId) {
            this.setState({chat: true});
          }
          break;
        default:
          console.log("INCOMING DATA NOT RECOGNIZED");
      }
    }
  }

  postUserObjectToServer = () => {
    this.socket.send(JSON.stringify(this.state))
  };

//Is the commented code below safe to delete?

  // setAgeRange = ageRange => {
  //   console.log("in setAgeRange");
  //   this.setState({ ageRange: ageRange, pageIndex: 2 }, () => {
  //     this.postUserObjectToServer();
  //     this.pageHandler();
  //   });
  // };
  // setAge = age => {
  //   console.log("in setAge");
  //   this.setState({ age: age, pageIndex: 3 }, () => {
  //     this.postUserObjectToServer();
  //     this.pageHandler();
  //   });
  // };


//  Should these two functions become one?
  setStateValue = (key, value) => {
    this.setState({ [key]: value, pageIndex: this.state.pageIndex + 1 }, () => {
      this.postUserObjectToServer();
      this.pageHandler();
    });
  };

  setTwoStateValues = (key, value, keyTwo, valueTwo) => {
    this.setState(
      { [key]: value, [keyTwo]: valueTwo, pageIndex: this.state.pageIndex + 1 },
      () => {
        this.postUserObjectToServer();
        this.pageHandler();
      }
    );
  };


  setPageIndex = index => {
    this.setState({ pageIndex: index });
  };
  pageHandler = () => {
    const { age, ageRange } = this.state;
    if (age === 0 && ageRange === 0) {
      return <PageOne setStateValue={this.setStateValue} />;
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

  // Each page handler needs to be its own component
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
            count={this.state.queueSize}
          />
        );
      case 8:
        return (
          <PageEightChild
            setPageIndex={this.setPageIndex}
            setTwoStateValues={this.setTwoStateValues}
            name={this.state.name}
            count={this.state.queueSize}
          />
        );
      case 9:
        return (
          <PageNineChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
            count={this.state.queueSize}
          />
        );
      case 10:
        return (
          <PageTenChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
            count={this.state.queueSize}
          />
        );
      case 11:
        return (
          <PageElevenChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
            count={this.state.queueSize}
          />
        );
      default:
        console.log("pageHandlerChild in an impossible index:", this.state.pageIndex);
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
  render() {
    return (
      <div className="intake-root-div">
        {this.state.chat ? <StartChatPage/> : this.pageHandler()}      
      </div>
    );
  }
}

export default Intake;
