import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import 'antd/dist/antd.css';
import './Chat.css';

class Chat extends Component{
    state = {
      messages:[],
      counsellor: '',
      userId:''
    };

  componentWillMount(){

    this.props.socket.onmessage = json => {
      let parsedJson = JSON.parse(json.data);
      switch (parsedJson.type){
        case 'toUserMsg':
          let messages = [...this.state.messages, parsedJson];
          this.setState({messages});
          break;
        default:
          console.log('Unregonized message type:', parsedJson.type);
      }
    }
  }

  sendMessage = (message) => {
    let messages = [...this.state.messages, message];
    this.setState({messages});
    this.props.socket.send(JSON.stringify(message))
  }
  render(){
    let counsellorName = this.props.counsellor.name? this.props.counsellor.name : null;
    let counsellorId = this.props.counsellor ? this.props.counsellor.id : null;
    let { userId } = this.props.user;
    let userName = this.props.user.name;
    return (
      <div className='chat'>
        <div className="chat-header">
          Counsellor: {counsellorName}
        </div>

        <Messages 
          messages={this.state.messages} 
          counsellorName={counsellorName}
          userName={userName}
        />

        <ChatBar         
          sendMessage={this.sendMessage}
          counsellorId={counsellorId}
          userId={userId}
        />
      </div>
    );
  };
}

export default Chat;