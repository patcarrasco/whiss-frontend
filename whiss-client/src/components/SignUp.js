import React, {useState} from 'react';

const SignUp = props =>  {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}
	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		let signUpObject = {
			username,
			password,
			name
		};
		props.handleSubmit(signUpObject);
		setName("");
		setUsername("");
		setPassword("");
	}
  return (
  	<form onSubmit={handleSubmit}>
	  	<label htmlFor="name">Name</label>
	  	<input required autoFocus name="name" type="text" value={name} onChange={handleNameChange} />
	  	<label htmlFor="username">Username</label>
	  	<input required autoFocus name="username" type="text" value={username} onChange={handleUsernameChange} />
	  	<label htmlFor="password">Password</label>
	  	<input required name="password" type="password" value={password} onChange={handlePasswordChange} />
	  	<button>SignUp</button>
	  </form>
  );
}

export default SignUp;
