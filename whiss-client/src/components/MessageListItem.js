import React from 'react';

const MessageListItem = props =>  {
  return (
    <li>
      <h3>{props.message.user.name}</h3>
      <p>{props.message.content}</p>
    </li>
  );
}

export default MessageListItem;
