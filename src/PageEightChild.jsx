import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageEightChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('page 8 component did mount')
 
  }
  render() {
    const {name} = this.props;
    return (
      <div className="page-five-child">
        <div style={{ fontSize: "50px" }}>{name}, I really want to talk to you. I'm talking to someone else right now. We will chat as soon as I'm done. Can you answer a few more questions for me?</div>
     <div>How are you feeling right now?</div>
     <div>Why, are do you feel that way?</div>
      </div>
    );
  }
}

export default PageEightChild;