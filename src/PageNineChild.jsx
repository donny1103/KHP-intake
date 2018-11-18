import React, { Component } from "react";
import "./App.css";
import QueueCounter from "./QueueCounter";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageNineChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeButton = color => {
      console.log('page nine', this.props)
    return (
      <div style={{ flex: 1, height:'200px', width:'200px' }}>
        <button
        onClick={()=>{this.props.setStateValue('favoriteColor', color)}}
          type="primary"
          className="round-button"
          style={{ backgroundColor: color, width:'180px', height:'180px' }}
        >
          {/* {`${color}`} */}
        </button>
      </div>
    );
  };
  render() {
    const { name } = this.props;
    return (
      <div className="page-nine-child">
        <div style={{ textAlign: "center", marginTop:'50px', width:'100vw' }}>
          <div style={{ display: "inline-block" }}>
            <div style={{ fontSize: "50px" }}>What's your favorite color?</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "90vh",
                marginTop:'50px',
                width:'100vw'
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width:'100%'
                  }}
                >
                  <div className="flex-1" />
                  {this.makeButton("green")}
                  {this.makeButton("orange")}
                  {this.makeButton("brown")}
                  {this.makeButton("blue")}
                  <div className="flex-1" />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row"
                      // width: "50vw",
                      // height: "20vh"
                    }}
                  >
                    <div className="flex-1" />
                    {this.makeButton("yellow")}
                    {this.makeButton("pink")}
                    {this.makeButton("purple")}
                    {this.makeButton("gray")}
                    <div className="flex-1" />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row"
                      // width: "50vw",
                      // height: "20vh"
                    }}
                  >
                    <div className="flex-1" />
                    {this.makeButton("#8D64B1")}
                    {this.makeButton("black")}
                    {this.makeButton("lightblue")}
                    {this.makeButton("white")}
                    <div className="flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QueueCounter count={this.props.queueSize} />
      </div>
    );
  }
}

export default PageNineChild;
