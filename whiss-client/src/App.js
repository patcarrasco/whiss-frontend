import React from 'react';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';
import ActionCable from 'actioncable';
import './App.css';

class App extends React.Component {
	API_WS_URL = "ws://localhost:3000/api/v1/cable";
	API_URL = "http://localhost:3000/api/v1/login";

	state = {
		chats: [],
		chat: {},
		view: false
	}

  Socket = {consumer: ActionCable.createConsumer(this.API_WS_URL)}

  componentDidMount() {
  	fetch(this.API_URL, {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({username: "johnmark", password: "none"})
  	})
	  this.Socket.chatChannel = this.createChannel(
	  	this.Socket.consumer,
	  	{channel: "ChatsChannel", token: localStorage.token},
	  	this.handleNewChats
	  );
  }
  componentWillUnmount() {
	  this.Socket.chatChannel.unsubscribe();
  }

	handleNewChats = (data) => {
		let parsedData = JSON.parse(data).data;
		if (Array.isArray(parsedData)) {
			parsedData = parsedData.map(obj => obj.attributes);
			this.setState({chats:parsedData});
		} else {
			parsedData = parsedData.attributes
			this.setState({chats:[parsedData, ...this.state.chats]});
		}
	}

	handleParsing(data) {
		let parsedData;
		if (typeof data === "string") {
			parsedData = JSON.parse(data);
		} else {
			parsedData = data;
		}
		return parsedData
	}

	sendChat = (title, members) => {
		this.Socket.chatChannel.send({
			title: title,
			members: members
		})
	}

	createChannel = (consumer, channelSettings, handleReceivedData) => {
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
	  });
	}

	toggleChatView = (chat) => {
		this.setState({
			view: !this.state.view,
			chat: chat
		});
	}
	showViews() {
		if (this.state.view) {
			return <ChatView handleClick={this.toggleChatView} chat={this.state.chat} socket={this.Socket} createChannel={this.createChannel} />
		} else {
			return <ChatList handleClick={this.toggleChatView} chats={this.state.chats} />
		}
	}

  render() {	
	  return (
	    <div className="App">
	    	{this.showViews()}
	    </div>
	  );
  }
}

export default App;
