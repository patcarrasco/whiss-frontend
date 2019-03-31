import React from 'react';

const ButtonStart = ({user, ...rest}) =>  {
  return (
  	<button {...rest} >{user.username} - Start</button>
  );
}
export default ButtonStart;
