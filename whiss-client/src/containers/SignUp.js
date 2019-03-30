import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { signUp } from '../store';
import Nav from '../components/Nav/Nav';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import Input from '../components/Input/Input';
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit';

const SignUp = ({signUp, history}) =>  {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	
	const handleNameChange = (e) => {
		setName(e.target.value);
	}
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	}
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const signUpObject = {
			name,
			username,
			password
		};
		signUp(signUpObject, history);
		setName("");
		setUsername("");
		setPassword("");
	}

	if (!localStorage.getItem("token")) {
		return (
			<section className="access-page">
				<header>
					<Nav>
						<Link to="/login">Login</Link>
					</Nav>
					<HeaderTitle>{"Sign Up"}</HeaderTitle>
				</header>
				<form className="access-form" onSubmit={handleSubmit}>
					<Input required autoFocus type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
					<Input required type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
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
	signUp: (signUpObject, history) => dispatch(signUp(signUpObject, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
