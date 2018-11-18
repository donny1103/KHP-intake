import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeButtons = (firstNum, secondNum, thirdNum, fourthNum) => {
    return (
      <div className="flex-1">
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          {this.makeButton(firstNum)}
          {this.makeButton(secondNum)}
          {this.makeButton(thirdNum)}
          {this.makeButton(fourthNum)}
        </div>
      </div>
    );
  };
  makeButton = age => {
    return (
      <div style={{ flex: 1 }}>
        <AwesomeButton
          action={() => {
            this.props.setStateValue('age', parseInt(age));
          }}
          type="primary"
          style={{
            height: "200px",
            width: "150px",
            marginTop: "50px"
          }}
        >
          <div className='child-page-two-button-text'>{age}</div>
        </AwesomeButton>
      </div>
    );
  };
  render() {
    return (
      <div className="page-two-child">
        <div className="intake-title">Great! So just how old are you...</div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              height: "60vh",
              width: "60vw",
              marginTop: "50px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%"
              }}
            >
              {this.makeButtons(2, 3, 4, 5)}
              {this.makeButtons(6, 7, 8, 9)}
              <div className="flex-1" />
              <div className="flex-1" />
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTwo;
