import React, {useState} from 'react';

const ChatForm = props =>  {
	const [title, setTitle] = useState("");
	const [selectedFriends, setSelectedFriends] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newChatObject = {
			members: selectedFriends,
			title: title
		};
		props.handleSubmit(newChatObject);

		e.target.selectedFriends.value = "";
		setTitle("");
		setSelectedFriends([]);
	}
	const handleFriendSelect = (e) => {
		let options = Array.from(e.target.selectedOptions).map(o => o.value);
		setSelectedFriends(options);
	}

	const displayFriends = () => {
		return (
			<select onChange={handleFriendSelect} required name="selectedFriends" multiple={true}>
				{props.friends.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
			</select>
		);
	}
  return (
  	<form onSubmit={handleSubmit}>
			{displayFriends()}
			<label htmlFor="title">Title</label>
  		<input required name="title" value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
  		<button>Create</button>
  	</form>
  );
}

export default ChatForm;
