import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'

const SignUp = props =>  {
	const API_URL = "http://localhost:3000/api/v1";
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const signUp = (signUpObject) => {
		fetch(API_URL + "/sign-up", {
			method: "Post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(signUpObject)
		})
			.then(res => res.json())
			.then(json => {
				if(json.token) {
					localStorage.setItem("token", json.token);
					props.history.replace("/")
				} else {
					alert(json.message)
				}
			});
	}
	
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
		signUp(signUpObject);
		setName("");
		setUsername("");
		setPassword("");
	}

	if (!localStorage.getItem("token")) {
		return (
			<section>
				<nav>
					<Link to="/login">Login</Link>
				</nav>
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input required autoFocus name="name" type="text" value={name} onChange={handleNameChange} />
					<label htmlFor="username">Username</label>
					<input required autoFocus name="username" type="text" value={username} onChange={handleUsernameChange} />
					<label htmlFor="password">Password</label>
					<input required name="password" type="password" value={password} onChange={handlePasswordChange} />
					<button>Sign Up</button>
				</form>
			</section>
		);
	} else {
		return <Redirect to="/" />;
	}
}

export default SignUp;
