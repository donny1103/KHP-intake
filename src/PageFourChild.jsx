import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageFourChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeButton = (source, gender) => {
    return (
      <div style={{ marginTop: "75px", height: "400px" }}>
        <AwesomeButton
          action={() => {
            this.props.setStateValue("gender", gender);
          }}
          type="primary"
          style={{
            height: "200px",
            marginTop: "160px",
            backgroundColor: "yellow",
            width: "480px",
            marginLeft:'800px'
          }}
        >
          <img
            style={{
              marginTop: "50px",
              height: "250px",
              objectFit: "cover",
              width: "480px"
            }}
            src={source}
          />
        </AwesomeButton>
      </div>
    );
  };
  render() {
    console.log("in page 4", this.props);
    return (
      <div className="page-four-child" style={{ height: "100vh" }}>
        <div style={{ textAlign: "center", marginTop: "-100px" }}>
          <div style={{ display: "inline-block" }}>

          {this.makeButton('./images/girl.png', 'female')}
          {this.makeButton('./images/boy.png', 'male')}
            <div className="flex-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default PageFourChild;
