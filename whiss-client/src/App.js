import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import Home from './containers/Home';

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