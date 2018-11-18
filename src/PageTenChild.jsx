import React, { Component } from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
class PageTenChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxArray: [
        { value: "mom", label: "My mom" },
        { value: "dad", label: "My dad" },
        { value: "brother", label: "My brother" },
        { value: "sister", label: "My sister" },
        { value: "friend", label: "My friends" },
        { value: "teacher", label: "My teacher" },
        { value: "coach", label: "My coach" },
        { value: "other", label: "Someone else" }
      ],
      arrayToReturn: []
    };
  }

  handleChange = event => {
    this.state.arrayToReturn.includes(event.target.value)
      ? this.setState({
          arrayToReturn: this.state.arrayToReturn.filter(
            () => !event.target.value
          )
        })
      : this.setState({
          arrayToReturn: [...this.state.arrayToReturn, event.target.value]
        });
  };

  handleClick = () =>{
      this.props.setStateValue('careAbout', this.state.arrayToReturn);
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: "50px" }}>
          <div style={{ textAlign: "center" }}>
            <div className="intake-title">Who do you care about?</div>
            <div style={{ display: "inline-block", marginTop:'35px' }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <form>
                  {this.state.checkboxArray.map(item => {
                    return (
                      <div style={{ textAlign: "left" }}>
                        <input
                          style={{
                            transform: "scale(4)",
                            backgroundColor: "blue"
                          }}
                          onChange={event => {
                            this.handleChange(event);
                          }}
                          type="checkbox"
                          value={item.value}
                        />
                        {`\xa0\xa0\xa0\xa0${item.label}`}
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop:'50px' }}>
            <div style={{ display: "inline-block" }}>
              <AwesomeButton action={()=>{this.handleClick()}} style={{height:'120px', width:'175px', fontSize:'30px'}} type="primary"> Next</AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTenChild;
