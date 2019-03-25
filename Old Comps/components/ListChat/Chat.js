import React from 'react';
import { Link } from 'react-router-dom';

const Chat = ({id, title}) => {
	return (
		<div className="chat-tile">
			<Link to={`/chats/${id}`}>{title}</Link>
		</div>
	);
};

export default Chat;