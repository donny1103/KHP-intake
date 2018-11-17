import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};
class PageEightChild extends Component {
  constructor(props) {
    super(props);
    this.state = { sadValue: 4, scaredValue: 4 };
  }

  handleSadChange = (event, value) => {
    console.log("slide change called");
    this.setState({ sadValue: value }, () => {
      console.log(this.state);
    });
  };
  handleScaredChange = (event, value) => {
    console.log("slide change called");
    this.setState({ scaredValue: value }, () => {
      console.log(this.state);
    });
  };
  componentDidMount() {
    console.log("page 8 component did mount");
  }
  render() {
    const { sadValue } = this.state;
    const { name } = this.props;
    return (
      <div className="page-five-child">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              marginTop: "50px",
              fontSize: "40px",
              fontWeight: "600",
              width: "70vw",
              display: "inline-block"
            }}
          >
            I'm talking to someone else right now {name}, but we will chat so
            soon. Can you answer a few more questions for me?
          </div>
          <div
            style={{ fontSize: "30px", marginTop: "80px", marginLeft: "50px" }}
          >
            How are you feeling right now?
          </div>
        </div>

        {/* happy/sad */}
        <div
          style={{ textAlign: "center", position: "relative", height: "100px" }}
        >
          <div style={{ display: "inline-block" }}>
            <div style={{ width: "800px", marginTop: "50px" }}>
              <div style={{ marginTop: "10px" }}>Happy/Sad</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px"
                }}
              >
                <div style={{ flex: 1 }}>
                  <img
                    src="./images/happy.png"
                    style={{ width: 7 * 15 - this.state.sadValue * 15 }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Slider
                    style={{ marginTop: "50px" }}
                    value={this.state.sadValue}
                    min={1}
                    max={7}
                    step={1}
                    onChange={this.handleSadChange}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src="./images/sad.png"
                    style={{ width: this.state.sadValue * 15 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
          
     
       <div
          style={{ textAlign: "center", position: "relative", height: "100px" }}
        >
          <div style={{ display: "inline-block" }}>
            <div style={{ width: "800px", marginTop: "120px" }}>
              <div style={{ marginTop: "10px" }}>Safe/Scared</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px"
                }}
              >
                <div style={{ flex: 1 }}>
                  <img
                    src="./images/calm.png"
                    style={{ width: 7 * 15 - this.state.scaredValue * 15 }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Slider
                    style={{ marginTop: "50px" }}
                    value={this.state.scaredValue}
                    min={1}
                    max={7}
                    step={1}
                    onChange={this.handleScaredChange}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src="./images/scared.png"
                    style={{ width: this.state.scaredValue * 15 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div style={{ textAlign:'center', marginTop:'200px' }}>
          <AwesomeButton action={()=>{this.props.setTwoStateValues('sadValue', this.state.sadValue, 'scaredValue', this.state.scaredValue)}} type="primary">This is how I Feel</AwesomeButton>
        </div>
      </div>
    );
  }
}

export default PageEightChild;

{
  /* <div style={{ flex: 1, marginTop:'150px'}}>
                  <AwesomeButton type="primary">This is how I Feel</AwesomeButton>
                </div> */
}
