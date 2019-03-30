import React from 'react';
import Message from "./Message";

const ListMessage = ({messages}) => {
	const currentUser = JSON.parse(localStorage.getItem("user"));
	const messageComponents = messages.map(m => <Message key={m.id} mine={m.user.name === currentUser.name} title={m.user.name} body={m.content} />);
	return (
		<main className="message-list">
			<section>
				{ messageComponents }
			</section>
		</main>
	);
};

export default ListMessage;