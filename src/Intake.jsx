import React, { Component } from "react";
import PageOne from "./PageOne.jsx";
import PageTwoChild from "./PageTwoChild.jsx";
import PageThreeChild from "./PageThreeChild.jsx";
import PageFourChild from "./PageFourChild.jsx";
import PageFiveChild from "./PageFiveChild.jsx";
import PageSixChild from "./PageSixChild.jsx";
import PageSevenChild from "./PageSevenChild.jsx";
import PageEightChild from "./PageEightChild.jsx";
import QueueCounter from "./QueueCounter"
import PageNineChild from "./PageNineChild.jsx"
import "./App.css";

class Intake extends Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 1, age: 0, ageRange: 0, type: 'user', time: new Date()};
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = event => {
      console.log('WS CONNECTED');
    }
    this.socket.onmessage = e => {
      const incoming = JSON.parse(e.data);
      console.log(incoming);

      switch (incoming.type) {
        case 'id':
          this.setState({userId: incoming.id});
          break;
        case 'updateCount':
          this.setState({queueSize: incoming.count});
          break;
        default:
          console.log('INCOMING DATA NOT RECOGNIZED')
      }
    }

    // fetch("http://localhost:9000/userid")
    //   .then(response => response.json())
    //   .then(response =>
    //     this.setState({ userId: response.userId }, () => {
    //       console.log(this.state);
    //     })
    //   );
  }

  postUserObjectToServer = () => {
    console.log('Sending stuff');
    console.log(this.state);

    this.socket.send(JSON.stringify(this.state))
    // axios
    //   .post("http://localhost:9000/user", this.state)
    //   .then(console.log)
    //   .catch(console.error("Error"));
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

  setStateValue = (key, value,) => {
    console.log("in setState value");
    this.setState({ [key]: value, pageIndex: this.state.pageIndex + 1 }, () => {
      this.postUserObjectToServer();
      this.pageHandler();
      console.log(this.state);
    });
  };

  setTwoStateValues = (key, value, keyTwo, valueTwo) =>{
    this.setState({ [key]: value, [keyTwo]:valueTwo, pageIndex:this.state.pageIndex + 1 }, () => {
        this.postUserObjectToServer();
        this.pageHandler();
        console.log(this.state);
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
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
          />
        );
      case 6:
        console.log("in case 6");
        return (
          <PageSixChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
          />
        );
      case 7:
        console.log("in case 7");
        return (
          <PageSevenChild
            setPageIndex={this.setPageIndex}
            setStateValue={this.setStateValue}
            name={this.state.name}
          />
        );
        case 8:
        console.log("in case 8");
        return (
          <PageEightChild
            setPageIndex={this.setPageIndex}
            setTwoStateValues={this.setTwoStateValues}
            name={this.state.name}
          />
        );
        case 9:
        console.log("in case 9");
        return (
          <PageNineChild
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
    </div>)
    ;
  }
}

export default Intake;
