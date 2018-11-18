import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageFiveChild extends Component {
    constructor(props) {
        super(props);
        this.state = {text:''};
      }

      componentDidMount() {
        console.log('page 3 component did mount')
        setTimeout(()=>{this.setState({text:"Would"})}, 200);
        setTimeout(()=>{this.setState({text:"Would you"})}, 400);
        setTimeout(()=>{this.setState({text:"Would you like"})}, 600);
        setTimeout(()=>{this.setState({text:"Would you like to"})}, 800);
        setTimeout(()=>{this.setState({text:"Would you like to play a game?"})}, 1500);
        setTimeout(()=>{this.setState({text:"Would you like to draw a picture?"})}, 2200);
        setTimeout(()=>{this.setState({text:"Would you like to answer more questions?"})}, 2900);
       
  
      
      }
  render() {
    
    return (
      <div className="page-eleven-child">
      <div style={{textAlign:'center', fontSize:'60px', marginTop:'50px'}}>{this.state.text}</div>
      </div>
    );
  }
}

export default PageFiveChild;