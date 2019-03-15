import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { connect } from 'react-redux'

import './App.css';

class App extends React.Component {
	render() {	
		return (
			<div className="App">
				<Switch>
					<Route path="/login" component={Login}/>} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/" component={Home}/>
				</Switch>
			</div>
		);
	}
}

export default App;