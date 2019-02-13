import React from 'react';
import MessageListItem from './MessageListItem';

const MessageList = props =>  {
  function messages() {
    return props.messages.map(message => <MessageListItem key={message.id} message={message}/>);
  }
  return (
    <ul id="message-list">
      {messages()}
    </ul>
  );
}

export default MessageList;
