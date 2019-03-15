import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom'

const Login = props =>  {
	const API_URL = "http://localhost:3000/api/v1";
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		let loginObject = {
			username,
			password
		};
		login(loginObject);
		setUsername("");
		setPassword("");
	}

	const login = (loginObject) => {
		fetch(API_URL + "/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginObject)
		})
		.then(res => res.json()).then(json => {
			if(!!json.token) {
				localStorage.setItem("token", json.token);
				props.history.replace("/")
			} else {
				alert(json.message)
			}
		});
	}
	const validateToken = () => {
		if (!localStorage.getItem("token")) {
			return (
				<Fragment>
					<Link to="/sign-up">Sign Up</Link>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Username</label>
						<input required autoFocus name="username" type="text" value={username} onChange={handleUsernameChange} />
						<label htmlFor="password">Password</label>
						<input required name="password" type="password" value={password} onChange={handlePasswordChange} />
						<button>Login</button>
					</form>
				</Fragment>
			);
		} else {
			return <Redirect to="/" />;
		}
	}


	return validateToken();
}

export default Login;
