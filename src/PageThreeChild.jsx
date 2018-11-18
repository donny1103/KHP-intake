import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'
import Typing from 'react-typing-animation';
const DimensionedExample = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})

class PageThreeChild extends Component {
  constructor(props) {
    super(props);
    this.state = {text:`${this.props.age} years old !`, canChangeText:true};
  }
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }
  componentDidMount() {

    setTimeout(()=>{this.props.setPageIndex(4)}, 4600);
  
  }
  render() {
    const { age } = this.props;
    console.log("in page 3", this.props);
    return (
      <div className="page-three-child">
        <div className='helv-rounded'style={{ fontSize: "150px", fontColor:'white', textAlign:'center', fontWeight:'800px' }}><div style={{paddingTop:'250px'}}><Typing startDelay={this.state.canChangeText ? 100 : 1000} onFinishedTyping={()=>{this.state.canChangeText ? this.setState({text:'AWESOME!', canChangeText:false}) : console.log('cant change')}} hideCursor={true} speed={150}><span>{this.state.text}</span></Typing></div></div>
      </div>
    );
  }
}

export default PageThreeChild;
