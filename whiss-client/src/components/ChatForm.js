import React, {useState} from 'react';

const ChatForm = props =>  {
	const [title, setTitle] = useState("");
	const [friends, setFriends] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(title)
		setTitle("");
	}
	const handleFriendSelect = (e) => {
		console.log(e.target.options.filter(option => option.selected));
	}
  return (
  	<form onSubmit={handleSubmit}>
			<select onChange={handleFriendSelect} name="friends" value={friends} multiple={true}>
			  <option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
			  <option value="opel">Opel</option>
			  <option value="audi">Audi</option>
			</select>
			<label htmlFor="title">Title</label>
  		<input name="title" value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
  		<button>Create</button>
  	</form>
  );
}

export default ChatForm;
