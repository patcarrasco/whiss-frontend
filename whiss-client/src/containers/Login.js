import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { login } from '../store';
import Nav from '../components/Nav/Nav';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import Input from '../components/Input/Input';
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit';

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
			<section className="access-page">
				<header>
					<Nav>
						<Link to="/sign-up">Sign Up</Link>
					</Nav>
					<HeaderTitle>{"Login"}</HeaderTitle>
				</header>
				<form className="access-form" onSubmit={handleSubmit}>
					<Input required autoFocus type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
					<Input required type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
					<ButtonSubmit>Login</ButtonSubmit>
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
