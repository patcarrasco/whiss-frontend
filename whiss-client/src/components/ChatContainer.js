import React from 'react';
import ChatList from './ChatList';


class ChatContainer extends React.Component {
	state = {
		chats: []
	}

	componentDidMount() {
		this.props.SOCKET.chatChannel = this.props.SOCKET.createChannel(
			this.props.SOCKET.consumer,
			{channel: "ChatsChannel", token: localStorage.getItem("token")},
			this.setChats
		);
	}

  componentWillUnmount() {
	  this.props.SOCKET.chatChannel.unsubscribe();
  }

  setChats = (data) => {
  	if (typeof data === "string") {
  		let parsedData = JSON.parse(data);
	  	this.setState({
	  		chats: parsedData
	  	})
  	} else {
  		console.log(data);
  	}
  }

  render () {
	  return (
	  	<ChatList SOCKET={this.props.SOCKET} chats={this.state.chats}/>
	  );
  }
}

export default ChatContainer;
