import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageSevenChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("page 7 component did mount");
    setTimeout(() => {
      this.props.setPageIndex(8);
    }, 3500);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="page-seven-child">
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            <div className="page-seven-title">Nice to meet you {name} :)</div>
            <div
              style={{ fontSize: "35px", marginTop: "50px", width: "700px" }}
            >
              I'm talking to someone else right now {name}, but we will chat so
              soon. In the top left you can see your place in line.
            </div>
            <div
              style={{ fontSize: "35px", marginTop: "50px", width: "700px" }}
            >
              Can you answer a few more questions for me?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageSevenChild;
