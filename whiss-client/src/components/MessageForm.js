import React, {useState} from 'react';
import MessageListItem from './MessageListItem';
import ChatConnection from './ChatConnection';

const MessageForm = props =>  {
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		setMessage(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(message)
		setMessage("");
	}
  return (
  	<form onSubmit={handleSubmit} >
  		<input required value={message} type="text" onChange={handleChange}/>
  		<button>Send</button>
  	</form>
  );
}

export default MessageForm;
