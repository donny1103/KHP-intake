import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageFourChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("in page 4", this.props);
    return (
      <div className="page-four-child" style={{ height: "100vh" }}>
        <div style={{ textAlign: "center", marginTop: "-100px" }}>
          <div style={{ display: "inline-block" }}>
            <div
              className="flex-1"
              style={{ marginTop: "75px", height: "400px" }}
            >
              <div
                className="intake-question-title"
                style={{ marginTop: "150px" }}
              >
                I'm a girl!
              </div>
              <AwesomeButton
                action={() => {
                  this.props.setStateValue("gender", "female");
                }}
                type="primary"
                style={{
                  height: "200px",
                  marginTop: "50px",
                  backgroundColor: "yellow"
                }}
              >
                <img
                  style={{ marginTop: "50px", height: "200px" }}
                  src="./images/girlshappy.png"
                />
              </AwesomeButton>
            </div>
            <div className="flex-1" />

            <div
              className="flex-1"
              style={{ marginTop: "75px", height: "400px" }}
            >
              <div
                className="intake-question-title"
                style={{ marginTop: "50px" }}
              >
                I'm a boy!
              </div>
              <AwesomeButton
                action={() => {
                  this.props.setStateValue("gender", "male");
                }}
                type="secondary"
                style={{ height: "200px", marginTop: "50px" }}
              >
                <img
                  style={{ marginTop: "50px", height: "200px" }}
                  src="./images/boyshappy.png"
                />
              </AwesomeButton>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default PageFourChild;
