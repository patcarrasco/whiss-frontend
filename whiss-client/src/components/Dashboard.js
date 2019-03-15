import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import ActionCable from 'actioncable';


class Home extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<Fragment>
				<h1>Home</h1>
				<ul>
					<li>Friend Request</li>
					<li>Friend Request</li>
					<li>Friend Request</li>
					<li>Friend Request</li>
					<li>Friend Request</li>
				</ul>
			</Fragment>
		);
	}
}

export default Home;