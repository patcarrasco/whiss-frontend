import React, {Fragment} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import ActionCable from 'actioncable';
import Dashboard from './Dashboard';
import ChatContainer from './ChatContainer';
import RequestForm from './RequestForm';


class Home extends React.Component  {
	API_WS_URL = "ws://localhost:3000/api/v1/cable";
	API_URL = "http://localhost:3000/api/v1";
	state = {
		user: {}
	}
	SOCKET = {
		consumer: ActionCable.createConsumer(this.API_WS_URL),
		createChannel: (consumer, channelSettings, handleReceivedData) => {
			return consumer.subscriptions.create(channelSettings, {
				received: (data) => {
					handleReceivedData(data);
				},
				connected: function() {
					console.log("Connected")
				},
				disconnected: function() {
					console.log("Disconnected")
				},
				rejected: function() {
					console.log("Rejected")
				}
			})
		}
	}

	componentDidMount() {
		this.setCurrentUser();
	}

	setCurrentUser = () => {
		fetch(this.API_URL + `/current-user`, {
			method: "Post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(localStorage.getItem("token"))
		})
			.then(res => res.json())
			.then((user) => this.setState({user}));
	}

	logOut = () => {
		localStorage.clear();
		this.props.history.replace("/");
	}
	validateToken = () => {
		if (localStorage.getItem("token")) {
			return (
				<Switch>
					<Route path={`/chats`} render={() => <ChatContainer/>}/>
					<Route path={"/requests"} render={() => <RequestForm/>}/>					
					<Route path={"/"} render={() => <Dashboard/>}/>					
				</Switch>
			);
		} else {
			return <Redirect to="/login" />;
		}
	}

	render() {
		return (
			<Fragment>
				<header>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/chats">Chats</Link>
						<button onClick={this.logOut}>Log Out</button>
					</nav>
				</header>
				<main>
					{this.validateToken()}
				</main>
			</Fragment>
		);
	}
}

export default Home;
