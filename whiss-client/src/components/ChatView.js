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
		let newMessages = JSON.parse(data).data;
		if (Array.isArray(newMessages)) {
			newMessages = newMessages.map(m => m.attributes);
			this.setMessages(newMessages);
		} else {
			newMessages = newMessages.attributes;
			newMessages = [newMessages, ...this.state.messages];
			this.setMessages(newMessages);
		}
	}
	back = () => {
		this.props.handleClick({});
	}
  render() {
  	return (
	    <section>
	      <MessageList chat={this.props.chat} messages={this.state.messages}/>
	    	{/*<MessageForm handleSubmit={props.handleSubmit} />*/}
	    	<button onClick={this.back}>Back</button>
	    </section>
	  );
  }
}

export default ChatView;
