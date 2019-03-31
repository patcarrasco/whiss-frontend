import React from 'react';
import Message from "./Message";
import { useScrollBottom } from "../../helpers";

const ListMessage = ({messages}) => {
	const messageRef = useScrollBottom();
	const currentUser = JSON.parse(localStorage.getItem("user"));
	const messageComponents = messages.map(m => <Message key={m.id} mine={m.user.name === currentUser.name} title={m.user.name} body={m.content} />);

	return (
		<main ref={messageRef} className="message-list">
			<section>
				{ messageComponents }
			</section>
		</main>
	);
};

export default ListMessage;