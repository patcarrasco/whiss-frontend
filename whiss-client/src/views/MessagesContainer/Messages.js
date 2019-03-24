import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../components/Nav';
import HeaderTitle from '../../components/HeaderTitle';
import MessageList from '../../components/MessageList';
import NewMessageForm from '../../components/NewMessageForm/NewMessageForm';

const Messages = ({messages, sendMessage, chatId}) => {
	const createMessage = content => {
		const message = {
			chat_id: chatId,
			content
		};
		sendMessage(message);
	}
	return (
		<section>
			<header>
				<Nav><Link to="/chats">Chats</Link></Nav>
				<HeaderTitle>{"Hi"}</HeaderTitle>
			</header>
			<MessageList messages={messages}/>
			<NewMessageForm sendMessage={createMessage}/>
		</section>
	);
}

const mapStateToProps = state => ({
	messages: state.chats.messages
});

export default connect(mapStateToProps)(Messages);