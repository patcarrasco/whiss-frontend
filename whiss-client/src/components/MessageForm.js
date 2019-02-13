import React, {useState} from 'react';

const MessageForm = props =>  {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(message)
		setMessage("");
	}
  return (
  	<form onSubmit={handleSubmit} >
  		<input required value={message} type="text" onChange={(e) => setMessage(e.target.value)}/>
  		<button>Send</button>
  	</form>
  );
}

export default MessageForm;
