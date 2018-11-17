import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageSevenChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('page 7 component did mount')
    setTimeout(()=>{this.props.setPageIndex(8)}, 1500);
  }
  render() {
    const {name} = this.props;
    return (
      <div className="page-five-child">
        <div style={{ fontSize: "50px" }}>Nice to meet you {name} :) Interstitial here</div>
      </div>
    );
  }
}

export default PageSevenChild;