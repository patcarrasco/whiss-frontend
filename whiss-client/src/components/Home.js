import React, {Fragment} from 'react';
import ChatContainer from './ChatContainer';
import {Route, Link} from 'react-router-dom'
import ActionCable from 'actioncable';


class Home extends React.Component  {
	API_WS_URL = "ws://localhost:3000/api/v1/cable";
	API_URL = "http://localhost:3000/api/v1";

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

  logOut = () => {
  	localStorage.clear();
  	this.props.history.replace("/");
  }

  render() {
  	return (
			<Fragment>
				<nav>
					<Link to="/chats">Chats</Link>
					<button onClick={this.logOut}>Logout</button>
				</nav>
				<ChatContainer SOCKET={this.SOCKET}/>
				{/*<Route path="/chats" render={props => <ChatContainer {...props} SOCKET={this.SOCKET}/>}/>*/}
			</Fragment>
  	);
  }
}

export default Home;
