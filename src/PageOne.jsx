import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeButtons = (text, ageRange) => {
    
    return (
      <div style={{ flex: 1 }}>
        <AwesomeButton
        action={()=>{console.log('button clicked'); this.props.setStateValue('ageRange', ageRange)}}
          type="primary"
          style={{height:'200px', width: "200px", marginTop: "50px", fontSize:'20px' }}
          
        >
          <div className='helv-body'>{text}</div>
        </AwesomeButton>
      </div>
    );
  };
  clickHandler = () => {};
  render() {
    return (
      <div className="intake-root-div">
        <div className="intake-title">Welcome to the KidsHelp Phone</div>
        <div className="intake-question-title helv-body">How old are you?</div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              height: "60vh",
              width: "60vw",
              marginTop: "50px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%"
              }}
            >
              {this.makeButtons("0 - 9", "child")}
              {this.makeButtons("10 - 19", "adolescent")}
              {this.makeButtons("19 +", "adult")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageOne;
