import React, {useState} from 'react';

const Login = props =>  {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}
	const handleSubmit = async (e) => {
		e.preventDefault();

		let loginObject = {
			username,
			password
		};
		props.handleSubmit(loginObject);
		setUsername("");
		setPassword("");
	}


  return (
		<form onSubmit={handleSubmit}>
	  	<label htmlFor="username">Username</label>
	  	<input required autoFocus name="username" type="text" value={username} onChange={handleUsernameChange} />
	  	<label htmlFor="password">Password</label>
	  	<input required name="password" type="password" value={password} onChange={handlePasswordChange} />
	  	<button>Login</button>
	  </form>
	);
}

export default Login;
