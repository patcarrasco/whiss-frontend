import React, {Fragment,Component} from 'react';
import ChatView from './ChatView';
import {Route, Switch, Link} from 'react-router-dom';


class ChatViewList extends Component {
	chatViews = () => {
		return this.props.chats.map(chat => <Route key={chat.id} path={`/chats/${chat.id}`} render={(props)=>(<ChatView {...props} SOCKET={this.props.SOCKET} chat={chat} />)} />);
	}
	render() {
		return (
			<Switch>
				{this.chatViews()}
			</Switch>
		);
	}
}


export default ChatViewList;
