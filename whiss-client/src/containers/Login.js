import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { login } from '../store';

const Login = props =>  {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const loginObject = {
			username,
			password
		};
		props.login(loginObject, props.history);
		setUsername("");
		setPassword("");
	}

	if (!localStorage.getItem("token")) {
		return (
			<section>
				<nav>
					<Link to="/sign-up">Sign Up</Link>
				</nav>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username</label>
					<input required autoFocus name="username" type="text" value={username} onChange={handleUsernameChange} />
					<label htmlFor="password">Password</label>
					<input required name="password" type="password" value={password} onChange={handlePasswordChange} />
					<button>Login</button>
				</form>
			</section>
		);
	} else {
		return <Redirect to="/" />;
	}
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
	login: (loginObject, history) => dispatch(login(loginObject, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
