import React, {Fragment} from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';
import {Route, Switch, BrowserRouter} from 'react-router-dom';


class ChatContainer extends React.Component {
	state = {
		chats: [],
		friends: [],
	}

	componentDidMount() {
		fetch(`http://localhost:3000/api/v1/friends`, {
			method: "Post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(localStorage.getItem("token"))
		}).then(res => res.json()).then(this.setFriends);

		this.props.SOCKET.chatChannel = this.props.SOCKET.createChannel(
			this.props.SOCKET.consumer,
			{channel: "ChatsChannel", token: localStorage.getItem("token")},
			this.handleData
		);
	}

	componentWillUnmount() {
		this.props.SOCKET.chatChannel.unsubscribe();
	}

	setFriends = (friends) => {
		this.setState({friends});
	}

	handleData = (data) => {
		let parsedData = JSON.parse(data);
		if (!!parsedData.message) {
			alert(parsedData.message);
		} else if (Array.isArray(parsedData)) {
			this.setState({
				chats: parsedData
			});
		} else {
			this.setState({
				chats: [...this.state.chats, parsedData]
			});
		}
	}

	newChat = (newChatObject) => {
		newChatObject.token = localStorage.getItem("token");
		this.props.SOCKET.chatChannel.send(newChatObject)
	}

	render () {
		return (
			<section>
				<ChatList SOCKET={this.props.SOCKET} chats={this.state.chats}/>
				<ChatForm handleSubmit={this.newChat} friends={this.state.friends}/>
			</section>
		);
	}
}

export default ChatContainer;
