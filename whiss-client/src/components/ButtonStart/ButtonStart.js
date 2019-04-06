import React from 'react';

const ButtonStart = ({user, children, ...rest}) =>  {
  return (
  	<button className="start-button" {...rest}>{children}</button>
  );
}
export default ButtonStart;
