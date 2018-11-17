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
          <div style={{ display: "flex", flexDirection: "column", height:'100%' }}>
            <div style={{ display: "inline-display" }}>
              <div className="flex-1 intake-title">
                <div style={{ fontSize: "50px" }}>What is your name?</div>
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  onChange={event => {
                    this.onChange(event);
                  }}
                />
              </div>
              <div className="flex-1">
                <AwesomeButton action={()=>{this.props.setStateValue('name', this.state.name)}}type="primary">Let me know!</AwesomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageSixChild;
