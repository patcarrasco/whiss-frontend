import React, {Fragment} from 'react';
import ChatView from './ChatView';
import ChatViewList from './ChatViewList';
import {withRouter} from 'react-router-dom';

class ChatList extends React.Component  {
	state = {
	}
	setChatView = (chat) => {
		this.props.history.push(`/chats/${chat.id}`);
	}

	toggleChatView = () => {
		this.setState({
			currentChat: {},
			chatView: false
		});
	}

	currentView() {
		if(this.state.chatView) {
			return this.chatView();
		} else {
			return this.chatList();
		}
	}

	chatList() {
		return (
			<ul id="chat-list" style={{listStyleType: "none"}}>
				{this.props.chats.map(chat => (<li key={chat.id}><button chat={chat} onClick={() => this.setChatView(chat)}>{chat.title}</button></li>))}
			</ul>
		);
	}

	render() {
		return (
			<Fragment>
				{this.chatList()}
				<ChatViewList SOCKET={this.props.SOCKET} chats={this.props.chats} />
			</Fragment>
		);
	}
}

export default withRouter(ChatList);
