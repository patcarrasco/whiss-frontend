import React from 'react';
import { withRouter } from 'react-router-dom';

const NewChatButton = ({history}) => {
	return (
		<div>
			<h3>New Chat</h3>
			<button onClick={() => history.push("/new-chat")}>+</button>
		</div>
	);
}

export default withRouter(NewChatButton);