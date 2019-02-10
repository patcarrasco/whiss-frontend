import React from 'react';

const MessageListItem = props =>  {
  return (
    <li>
      <h3>{props.message.user_id}</h3>
      <p>{props.message.content}</p>
    </li>
  );
}

export default MessageListItem;
