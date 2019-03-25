import React from 'react';
import Chat from "./Chat";

const ChatList = ({chats}) => {
	const chatComponents = chats.map(c => <Chat key={c.id} id={c.id} title={c.title} />);
	return (
		<main className="chat-list">
			<section>
				{ chatComponents }
			</section>
		</main>
	);
};

export default ChatList;