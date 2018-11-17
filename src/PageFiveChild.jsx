import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageFiveChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('page 5 component did mount')
    setTimeout(()=>{this.props.setPageIndex(6)}, 1500);
  }
  render() {
    const { age } = this.props;
    console.log("in page 3", this.props);
    return (
      <div className="page-five-child">
        <div style={{ fontSize: "50px" }}>Awesome! Interstitial here</div>
      </div>
    );
  }
}

export default PageFiveChild;