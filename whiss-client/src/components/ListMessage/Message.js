import React from 'react';

const Message = ({title, body, mine}) => {
	return (
		<div className={mine ? "message-mine": "message"}>
			<h4>{title}</h4>
			<p>{body}</p>
		</div>
	);
};

export default Message;