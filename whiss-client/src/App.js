import React from 'react';
import ActionCable from 'actioncable';
// import ChatList from './components/ChatList';
import MessageList from './components/MessageList';
import './App.css';

class App extends React.Component {
	API_WS_URL = "ws://localhost:3000/api/v1/cable";
	API_URL = "http://localhost:3000/api/v1";

	state = {
		messages: [],
		chatId: 1
	}

  Socket = {};

  componentDidMount() {
  	this.getData(this.API_URL+"/messages", this.handleMessages);
  	this.Socket.cable = ActionCable.createConsumer(this.API_WS_URL);
	  this.Socket.chatChannel = this.createChannel(this.Socket.cable);
  }

  createChannel = (consumer) => {
  	return consumer.subscriptions.create({channel: "MessagesChannel", chat_id: this.state.chatId }, {
	    received: (data) => {
	    	this.addMessage(data)
	    },
	    connected: function() {
	      console.log("Connected")
	    },
	    disconnected: function() {
	      console.log("Disconnected")
	    },
	    rejected: function() {
	      console.log("Rejected")
	    },
	    transmit: function (data) {
	    	this.perform("transmit", {"data": data});
	    }
	  });
  }

	handleUnsubscribe = () => {
		this.Socket.chatChannel.unsubscribe();
	}
	handleSubscribe = () => {
		this.Socket.chatChannel = this.createChannel(this.Socket.cable);
	}

  getData = (url, cb) => {
  	fetch(url)
  		.then(res => res.json())
	    .then(json => {
	      return cb(json);
	  	});
	}

	handleMessages = (data) => {
		let messages = this.parseSerializedResponse(data);
		messages.sort(message => -message.id);
		this.setState({messages})
	}

	addMessage = (data) => {
		let message = this.parseSerializedResponse(data);
		this.setState({messages: [message, ...this.state.messages]})
	}

	parseSerializedResponse = (data) => {
		let parsedData;
		let formattedData = {};

	  if (Array.isArray(data.data)) {
	    formattedData = data.data.map(elem => elem.attributes);
	  } else {
	  	console.log(data);
			parsedData = JSON.parse(data);
	    formattedData = parsedData.data.attributes;
	  }
		return formattedData;
	}

  createMessage = () => {
  	fetch("http://localhost:3000/api/v1/messages", {
  		method: "Post",
  		headers: {
  			"Content-Type": "application/json",
  			Accept: "json"
  		},
  		body: JSON.stringify({user_id: 1,chat_id: 1, content: "Hello, now the front."})
  	});
  }

  render() {	
	  return (
	    <div className="App">
	    	{/*<ChatList chats={chats} />*/}
	    	<MessageList chat={{title: "Cool"}} messages={this.state.messages} />
	    	<button onClick={this.handleUnsubscribe}>Unsubscribe</button>
	    	<button onClick={this.handleSubscribe}>Subscribe</button>
	    </div>
	  );
  }
}

export default App;
