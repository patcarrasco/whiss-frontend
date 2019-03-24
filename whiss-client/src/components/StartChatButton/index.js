import React from 'react';

const StartChatButton = ({user}) =>  {
  return (
  	<button>{user.username} - Start</button>
  );
}
export default StartChatButton;
