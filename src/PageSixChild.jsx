import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageSixChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('page 3 component did mount')
    setTimeout(()=>{this.props.setPageIndex(4)}, 1500);
  }
  render() {
    const { age } = this.props;
    console.log("in page 3", this.props);
    return (
      <div className="page-three-child">
        <div style={{ fontSize: "50px" }}>Nice, {age}! Interstitial here</div>
      </div>
    );
  }
}

export default PageSixChild;