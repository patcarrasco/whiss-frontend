import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import ButtonSend from '../../components/ButtonSend/ButtonSend';

const FormNewMessage = ({title = null, sendMessage}) => {
	const [content, setContent] = useState("");

	const handleSend = (e) => {
		e.preventDefault();
		sendMessage(content);
		setContent("");
	}
	return (
		<footer className="message-form">
			{title ? <h3>{title}</h3> : null}
			<form className="message-form" onSubmit={handleSend}>
				<Input autoFocus={true} required={true} type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Aa" />
				<ButtonSend />
			</form>
		</footer>
	);
}

export default FormNewMessage;






