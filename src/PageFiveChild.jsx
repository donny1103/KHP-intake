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
    
    return (
      <div className="page-five-child">
      <div style={{textAlign:'center', fontSize:'160px', marginTop:'-200px'}}>Great!</div>
      </div>
    );
  }
}

export default PageFiveChild;