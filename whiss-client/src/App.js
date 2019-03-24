import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import SignUp from './views/SignUp';
import Login from './views/Login';
import Home from './views/Home';

const App = props => {
	return (
		<div className="App">
			<Switch>
				<Route path="/sign-up" component={SignUp} />
				<Route path="/login" component={Login} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default withRouter(App);