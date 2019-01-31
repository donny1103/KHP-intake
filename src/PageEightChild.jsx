import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import QueueCounter from "./QueueCounter";
//import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
// const styles = {
//   root: {
//     width: 300
//   },
//   slider: {
//     padding: "22px 0px"
//   }
// };
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
    // const { sadValue } = this.state;
    // const { name } = this.props;
    return (
      <div className="page-eight-child">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              marginTop: "50px",
              fontSize: "40px",
              fontWeight: "600",
              width: "70vw",
              display: "inline-block"
            }}
         / >


          <div
          className='helv-rounded'
            style={{ fontSize: "60px", marginLeft: "50px" }}
          >
            How are you feeling right now?
          </div>
        </div>

        {/* happy/sad */}
        <div
          style={{ textAlign: "center", position: "relative", height: "100px" }}
        >
          <div style={{ display: "inline-block" }}>
            <div style={{ width: "800px", marginTop: "80px" }}>
              <div style={{ marginTop: "10px", fontSize:'40px' }}>Happy......Sad</div>
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
                    alt='happy'
                    style={{ width: 7 * 30 - this.state.sadValue * 30 }}
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
                    alt='sad'
                    style={{ width: this.state.sadValue * 30 }}
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
            <div style={{ width: "800px", marginTop: "240px" }}>
              <div style={{ marginTop: "10px", fontSize:'40px' }}>Safe......Scared</div>
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
                    style={{ width: 7 * 30 - this.state.scaredValue * 30 }}
                    alt='calm'
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
                    style={{ width: this.state.scaredValue * 30 }}
                    alt='scared'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign:'center', marginTop:'360px' }}>
          <AwesomeButton style={{width:'200px', height:'200px', fontSize:'20px'}} action={()=>{this.props.setTwoStateValues('sadValue', this.state.sadValue, 'scaredValue', this.state.scaredValue)}} type="primary">This is how I feel</AwesomeButton>
        </div>
        <QueueCounter count={this.props.count} />
      </div>
    );
  }
}

export default PageEightChild;

