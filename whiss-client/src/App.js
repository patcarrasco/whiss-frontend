import React from 'react';
import ChatList from './components/ChatList';
import MessageList from './components/MessageList';
import ActionCable from 'actioncable';
import './App.css';

class App extends React.Component {
	API_WS_URL = "ws://localhost:3000/api/v1/cable";
	API_URL = "http://localhost:3000/api/v1";

	state = {
		messages: [],
		chats: [],
		userId: 1
	}

  Socket = {};

  getData = (url, cb) => {
  	fetch(url)
  		.then(res => res.json())
	    .then(cb);
	}
  componentDidMount() {
		this.getData(this.API_URL+"/messages", this.handleNewMessages);
  	this.Socket.consumer = ActionCable.createConsumer(this.API_WS_URL);
	  this.Socket.chatChannel = this.createChannel(this.Socket.consumer, {channel: "ChatsChannel", user_id: this.state.userId}, this.handleNewChat);
  }


	handleNewChat = (data) => {
		
		const parsedData = JSON.parse(data).data.attributes;
		console.log(parsedData)
		this.Socket.messageChannel = this.createChannel(this.Socket.consumer, {channel: "MessagesChannel", chat_id: parsedData.id}, this.handleNewMessage);
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

	handleNewMessages = (data) => {
		let parsedData = this.handleParsing(data).data;
		parsedData = parsedData.map(obj => obj.attributes).sort(message => -message.id);
		this.setState({
			messages: parsedData
		})
	}

	handleNewMessage = (data) => {
		let parsedData = this.handleParsing(data).data.attributes;
		this.setState({
			messages: [parsedData, ...this.state.messages]
		})
	}

	createNewChat = () => {
		this.sendChat("New Chat", "Yo, Homies", [1,2,3,4]);
	}
	sendChat = (title, firstMessage = "Welcome to the Chat", friends) => {
		this.Socket.chatChannel.send({
			title: title,
			initial_content: {user_id: this.state.userId, content: firstMessage},
			friends: friends
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

	deleteChannel = (channel) => {
		channel.unsubscribe();
	}







	// sendWhisper = (whisper, whisperChannel) => {
	// 	// {
	// 	// 	content: "",
	// 	// 	user_id: 1,
	// 	// 	friends: [id1, id2, id3]
	// 	// }
	// 	whisperChannel.transmit(whisper);
	// }












	// handleMessages = (data) => {
	// 	console.log(data);
	// 	// let messages = this.parseSerializedResponse(data);
	// 	// messages.sort(message => -message.id);
	// 	// this.setState({messages})
	// }

	// addMessage = (data) => {
	// 	let message = this.parseSerializedResponse(data);
	// 	this.setState({messages: [message, ...this.state.messages]})
	// }

 //  createMessage = () => {
 //  	fetch("http://localhost:3000/api/v1/messages", {
 //  		method: "Post",
 //  		headers: {
 //  			"Content-Type": "application/json",
 //  			Accept: "json"
 //  		},
 //  		body: JSON.stringify({user_id: 1,chat_id: 1, content: "Hello, now the front."})
 //  	});
 //  }

  render() {	
	  return (
	    <div className="App">
	    	{/*<ChatList chats={this.state.chats} />*/}
	    	<MessageList chat={{title: "Cool"}} messages={this.state.messages} />
	    	<button onClick={this.createNewChat}>Test</button>
	    </div>
	  );
  }
}

export default App;
