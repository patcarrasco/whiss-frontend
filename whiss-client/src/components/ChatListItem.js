import React from 'react';

const ChatListItem = props =>  {
  return (
    <li>
      <h3>Sender: {props.chat.sender_id}</h3>
      <h3>Receiver: {props.chat.receiver_id}</h3>
    </li>
  );
}

export default ChatListItem;
