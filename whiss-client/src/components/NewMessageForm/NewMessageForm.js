import React, { useState } from 'react';
import Input from '../../components/Input';
import SendButton from '../../components/SendButton';

const NewMessageForm = ({sendMessage}) => {
	const [content, setContent] = useState("");

	const handleSend = (e) => {
		e.preventDefault();
		sendMessage(content);
		setContent("");
	}
	return (
		<section className="message-form">
			<form className="message-form" onSubmit={handleSend}>
				<Input required={true} type="text" onChange={e => setContent(e.target.value)} placeholder="Aa" />
				<SendButton />
			</form>
		</section>
	);
}

export default NewMessageForm;