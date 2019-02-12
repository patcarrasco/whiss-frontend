import React, {Component} from 'react';
import MessageList from './MessageList';

class ChatView extends Component {
	state = {
		messages: []
	}

	setMessages = (messages) => {
		this.setState({messages});
	}

	componentDidMount() {
		this.props.socket.messageChannel = this.props.createChannel(this.props.socket.consumer, {channel: "MessagesChannel", chat_id: this.props.chat.id}, this.handleNewMessages);
	}
  componentWillUnmount() {
  	this.props.socket.messageChannel.unsubscribe();
  }

	handleNewMessages = (data) => {
		console.log(data);
	}
	back = () => {
		this.props.handleClick({});
	}
	sendNotification = () => {
		this.props.socket.messageChannel.send({
			message: {user_id: 1, chat_id: 3, content: "fjdlfjslks;"},
			recipients: [{id:1},{id:3},{id:4}]
		});
	}
  render() {
  	return (
	    <section>
	      <MessageList chat={this.props.chat} messages={this.state.messages}/>
	    	{/*<MessageForm handleSubmit={props.handleSubmit} />*/}
	    	<button onClick={this.back}>Back</button>
	    	<button onClick={this.sendNotification}>Send Notification</button>
	    </section>
	  );
  }
}

export default ChatView;
