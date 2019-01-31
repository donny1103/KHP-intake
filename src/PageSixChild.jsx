import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
class PageSixChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = event => {
    this.setState({ name: event.target.value }, () => {
      console.log(this.state);
    });
  };
  onSubmit(event) {
    event.preventDefault();

    console.log("form submitted");
  }
  render() {
    console.log("in page 6", this.props);
    return (
      <div className="page-six-child">
        <div style={{ textAlign: "center" }}>
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ display: "inline-display" }}>
              <div className="flex-1 intake-title">
                <div style={{ fontSize: "100px", marginTop: "200px" }}>
                  What is your name?
                </div>
              </div>

              <div className="flex-1">
                <input
                  style={{
                    height: "200px",
                    fontSize: "100px",
                    textAlign: "center",
                    marginTop: "50px"
                  }}
                  type="text"
                  name="name"
                  className="helv-body"
                  autoComplete="off"
                  onChange={event => {
                    this.onChange(event);
                  }}
                />
              </div>
              <div className="flex-1">
                <AwesomeButton
                  action={() => {
                    this.props.setStateValue("name", this.state.name);
                  }}
                  style={{
                    height: "200px",
                    width: "200px",
                    marginTop: "50px",
                    fontSize: "35px",
                    lineHeight: "40px"
                  }}
                  type="primary"
                >
                  <div className="helv-body">Let me know!</div>
                </AwesomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageSixChild;
