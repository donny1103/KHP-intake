import React from 'react';

const QueueCounter = (props) => {
  return (<div className="counter"><span>My Spot In Line:</span> {props.count}</div>)
}

export default QueueCounter;