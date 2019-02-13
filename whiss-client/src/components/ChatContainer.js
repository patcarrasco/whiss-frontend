import React, {Fragment} from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';
import {Route} from 'react-router-dom';


class ChatContainer extends React.Component {
	state = {
		chats: []
	}

	componentDidMount() {
		this.props.SOCKET.chatChannel = this.props.SOCKET.createChannel(
			this.props.SOCKET.consumer,
			{channel: "ChatsChannel", token: localStorage.getItem("token")},
			this.handleData
		);
	}

  componentWillUnmount() {
	  this.props.SOCKET.chatChannel.unsubscribe();
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

  render () {
	  return (
			<Fragment>
		  	<ChatList SOCKET={this.props.SOCKET} chats={this.state.chats}/>
				<Route path="/chats/new" render={props => <ChatForm {...props} SOCKET={this.props.SOCKET}/>}/>
			</Fragment>
	  );
  }
}

export default ChatContainer;
