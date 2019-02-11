import React from 'react';
import ChatListItem from './ChatListItem';

const ChatList = props =>  {
  function chats() {
    return props.chats.map(chat => <ChatListItem key={chat.id} chat={chat} handleClick={props.handleClick}/>);
  }
  return (
    <ul id="chat-list" style={{listStyleType: "none"}}>
      {chats()}
    </ul>
  );
}

export default ChatList;
