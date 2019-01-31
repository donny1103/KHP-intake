import React from 'react';
import uuidv4 from 'uuid/v4';

const Messages = ({ counsellorName, userName, messages }) => {

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
          </div>
        ) : null
      }
    </div>
  )
}

export default Messages;

