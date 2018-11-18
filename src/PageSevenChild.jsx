import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Typing from "react-typing-animation";
import QueueCounter from "./QueueCounter";
class PageSevenChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = () => {
    this.props.setPageIndex(8);
  };
  render() {
    const { name } = this.props;
    return (
      <div className="page-seven-child">
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            <div className="page-seven-title">Nice to meet you {name} :)</div>
            <div
              style={{
                fontSize: "35px",
                marginTop: "50px",
                width: "900px",
                color: "white"
              }}
            >
              I'm talking to another child right now {name}, but we will talk
              soon.
              <br />
              <br />
              The green box in the top left corner shows you your place in line.
            </div>
            <div
              style={{
                fontSize: "35px",
                marginTop: "50px",
                width: "900px",
                color: "white"
              }}
            >
              Can you answer a few more questions for me?
            </div>
            <AwesomeButton
              style={{
                width: "200px",
                height: "200px",
                marginTop: "100px",
                fontSize: "35px"
              }}
              action={() => {
                this.clickHandler();
              }}
            >
              Ok!
            </AwesomeButton>
          </div>
        </div>
        <QueueCounter count={this.props.queueSize} />
      </div>
    );
  }
}

export default PageSevenChild;
