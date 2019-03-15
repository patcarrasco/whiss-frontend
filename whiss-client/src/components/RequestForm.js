import React, {Fragment} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import ActionCable from 'actioncable';
import Dashboard from './Dashboard';
import ChatContainer from './ChatContainer';


class Home extends React.Component  {
	API_URL = "http://localhost:3000/api/v1";
	state = {
		requestedFriends: [],
		friends: []
	}
	
	componentDidMount() {
		this.fetchUsers()
	}

	render() {
		return (
			<ul>
				{this.friends()}
			</ul>
		);
	}
}

export default Home;
