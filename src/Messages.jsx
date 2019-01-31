import React, { Component } from "react";
import uuidv4 from 'uuid/v4';

class Messages extends Component {

  // constructor(props){
  //   super(props);
  // }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render(){
    let {counsellorName, userName, messages} = this.props;
    return ( 
      <div className="messages">
        {counsellorName ? 
          (
            <div>
              <p>Counsellor <b>{counsellorName}</b> is helping you</p><br />
              {
                messages.map(message => (
                  <div key={uuidv4()}>
                    <div className={message.type==='toUserMsg' ? 'message-time-left' : 'message-time-right'}> 
                      <span className='message-name'>{message.type==='toUserMsg' ? counsellorName : userName}</span>
                      <span>{message.time}</span>
                    </div> 
  
                    <div className={message.type === 'toUserMsg' ? "message-bubbles-left": "message-bubbles-right"}>
                      <span className={message.type === 'toUserMsg' ? "counsellor-message" : "client-message" }>{message.text}</span>
                    </div>
                  </div>
                ))
              }
              <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
              </div>  
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Messages;