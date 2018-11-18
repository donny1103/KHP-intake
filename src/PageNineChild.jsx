import React, { Component } from "react";
import "./App.css";
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
      <div style={{ flex: 1, height:'140px ' }}>
        <button
        onClick={()=>{this.props.setStateValue('favoriteColor', color)}}
          type="primary"
          className="round-button"
          style={{ backgroundColor: color }}
        >
          {/* {`${color}`} */}
        </button>
      </div>
    );
  };
  render() {
    const { name } = this.props;
    return (
      <div className="page-five-child">
        <div style={{ textAlign: "center", marginTop:'50px' }}>
          <div style={{ display: "inline-block" }}>
            <div style={{ fontSize: "50px" }}>What's your favorite color?</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "80vh",
                marginTop:'50px'
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row"
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
      </div>
    );
  }
}

export default PageNineChild;
