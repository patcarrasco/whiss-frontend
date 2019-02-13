import React, {Fragment,Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


class ChatView extends Component {

	state = {
		messages: []
	}

	componentDidMount() {
		this.props.SOCKET.messagesChannel = this.props.SOCKET.createChannel(
			this.props.SOCKET.consumer,
			{channel: "MessagesChannel", chat_id: this.props.chat.id},
			this.setMessages
		);
	}
	componentWillUnmount() {
		this.props.SOCKET.messagesChannel.unsubscribe();
	}

	setMessages = (data) => {
		const parsedData = JSON.parse(data);
		if (Array.isArray(parsedData)) {
			this.setState({
				messages: parsedData
			});
		} else {
			this.setState({
				messages: [...this.state.messages, parsedData]
			});	
		}
	}

	sendMessage = (message) => {
		const formattedMessage = {
			token: localStorage.getItem("token"),
			chat_id: this.props.chat.id,
			content: message
		}
		this.props.SOCKET.messagesChannel.send(formattedMessage);
	}

	render() {
		return (
			<Fragment>
				<button onClick={this.props.handleBack}>Back</button>
				<MessageList messages={this.state.messages}/>
				<MessageForm handleSubmit={this.sendMessage}/>
			</Fragment>
		);
	}
}


export default ChatView;
