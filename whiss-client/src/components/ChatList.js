import React from 'react';
import ChatView from './ChatView';

class ChatList extends React.Component  {
	state = {
		chatView: false,
		currentChat: {}
	}
	setChatView = (data) => {
  	this.setState({
  		currentChat: data,
  		chatView: true
  	});
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

  chatView() {
  	return <ChatView chat={this.state.currentChat} SOCKET={this.props.SOCKET} handleBack={this.toggleChatView}/>;
  }
  chatList() {
  	return (
  		<ul id="chat-list" style={{listStyleType: "none"}}>
	  		{this.props.chats.map(chat => (<button key={chat.id} chat={chat} onClick={() => this.setChatView(chat)}>{chat.title}</button>))}
			</ul>
		);
  }

	render() {
		return (
			this.currentView()
		);
	}
}

export default ChatList;
