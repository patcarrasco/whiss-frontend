import React from 'react';
import MessageList from './MessageList';

const ChatView = props =>  {
  return (
    <section>
      <MessageList messages={props.messages}/>
    	{/*<MessageForm handleSubmit={props.handleSubmit} />*/}
    </section>
  );
}

export default ChatView;
