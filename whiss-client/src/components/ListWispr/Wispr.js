import React from 'react';

const Message = ({body}) => {
	return (
		<div className="wispr">
			<h4>{"Wispr"}</h4>
			<p>{body}</p>
		</div>
	);
};

export default Message;