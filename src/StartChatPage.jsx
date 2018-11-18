
import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class StartChatPage extends Component {
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
      <div className="start-chat-page">
      <div style={{textAlign:'center'}}><div style={{display:'inline-block', fontSize:'60px', marginTop:'200px'}}>You are about to be connected to a counsellor...</div></div>
      </div>
    );
  }
}

export default StartChatPage;