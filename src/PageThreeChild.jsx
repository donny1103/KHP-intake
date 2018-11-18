import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'

const DimensionedExample = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})

class PageThreeChild extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }
  componentDidMount() {
    console.log('page 3 component did mount')
    setTimeout(()=>{this.setState({text:this.props.age})}, 200);
    setTimeout(()=>{this.setState({text:`${this.props.age} years`})}, 400);
    setTimeout(()=>{this.setState({text:`${this.props.age} years old`})}, 600);
    setTimeout(()=>{this.setState({text:`${this.props.age} years old !`})}, 800);
    setTimeout(()=>{this.setState({text:`${this.props.age} years old !!`})}, 850);
    setTimeout(()=>{this.setState({text:`${this.props.age} years old !!!!`})}, 900);
    setTimeout(()=>{this.setState({text:`${this.props.age} years old !!!!!`})}, 950);
    setTimeout(()=>{this.setState({text:`${this.props.age} years old !!!!!`})}, 1000);
    setTimeout(()=>{this.setState({text:"Got it!"})}, 1400);
    setTimeout(()=>{this.props.setPageIndex(4)}, 2100);
  
  }
  render() {
    const { age } = this.props;
    console.log("in page 3", this.props);
    return (
      <div className="page-three-child">
        <div style={{ fontSize: "150px", fontColor:'white', textAlign:'center', fontWeight:'800px' }}><div style={{paddingTop:'250px'}}>{this.state.text}</div></div>
      </div>
    );
  }
}

export default PageThreeChild;
