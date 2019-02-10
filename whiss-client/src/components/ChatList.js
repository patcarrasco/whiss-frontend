import React from 'react';
import ChatListItem from './ChatListItem';

const ChatList = props =>  {
  function chats(chats) {
    return chats.map(chat => <ChatListItem key={chat.id} chat={chat}/>);
  }
  return (
    <ul id="chat-list">
      {chats(props.chats)}
    </ul>
  );
}

export default ChatList;
