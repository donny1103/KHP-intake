import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageFiveChild extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  componentDidMount() {
    console.log("page 3 component did mount");

  }
  makeButtons = (path, label) =>{
    return (<div><div className='flex-1'><AwesomeButton style={{width:'300px', height:'300px'}}type='primary'><img src={path} style={{height:'200px', width:'200px'}}/></AwesomeButton></div><div style={{ marginTop:'25px', fontSize:'35px'}}>{label}</div></div>)
  }
  render() {
    return (
      <div className="page-eleven-child">
        <div
          style={{ textAlign: "center", fontSize: "60px", marginTop: "120px" }}
        >
          Would you like to ...
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-evenly', width:'80vw', marginTop:'200px' }} >
            {this.makeButtons('./images/play-games.png', 'play a game?')} 
            {this.makeButtons('./images/drawGIF.gif', 'draw something?')}
            {this.makeButtons('./images/questionsPNG.png', 'answer more questions?')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFiveChild;
