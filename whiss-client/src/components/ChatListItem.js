import React from 'react';

const ChatListItem = props =>  {
  return (
    <button onClick={() => props.handleClick(props.chat)} style={{marginBottom: "1rem", display:"block",border:"none", font:"inherit",backgroundColor: "#aaa", height: "20vh", width: "50%"}} data-id={props.chat.id}>
      {props.chat.title}
    </button>
  );
}

export default ChatListItem;
