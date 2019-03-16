import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';

const Welcome = (props) => {
	const API_URL = "http://localhost:3000/api/v1";
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
	return (
		<Fragment>
			<Switch>
				<Route path="/" component={Login}/>
				<Route path="/sign-up" component={SignUp}/>
			</Switch>
		</Fragment>
	);
}

export default Welcome;
