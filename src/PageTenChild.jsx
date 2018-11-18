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
        { value: "pet", label: "My pet" },
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
      <div className='page-ten-child'> 
        <div style={{ fontSize: "50px" }}>
          <div style={{ textAlign: "center", marginTop:'-25px'}}>
            <div className="intake-title">Who do you care about?</div>
            <div style={{ display: "inline-block", marginTop:'25px' }}>
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
                     <div className='helv-body' style={{marginTop:'-55px'}}>{`\xa0\xa0\xa0\xa0${item.label}`}</div>
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop:'50px' }}>
            <div style={{ display: "inline-block" }}>
              <AwesomeButton action={()=>{this.handleClick()}} style={{height:'200px', width:'200px', fontSize:'30px'}} type="primary"> Next</AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTenChild;
