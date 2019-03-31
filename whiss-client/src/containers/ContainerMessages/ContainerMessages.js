import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMessages } from '../../store';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Nav from '../../components/Nav/Nav';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import PageMessages from './PageMessages';
import FormNewMessage from '../../components/FormNewMessage/FormNewMessage';


const ContainerMessages = ({match, dispatch, clearMessages, chats}) => {
	const chatId = match.params.id;
	const chat = () => {
		if (chats) {
			return chats.filter(c => c.id === chatId);
		} else {
			return null;
		}
	}
	
	useEffect(() => {
		return clearMessages;
	},[]);

	const sendMessage = content => {
		const message = {
			chat_id: chatId,
			content
		};

		messageChannel.current.send({type: "NEW_MESSAGE", payload: message });
	}
	const messageChannel = React.createRef();
	const channel = {channel: "MessageChannel", chat_id: chatId};

	return (
		<ActionCableConsumer ref={messageChannel} channel={channel} onRejected={() => console.log("Rejected")} onReceived={dispatch}>
			<section className="message-page">
				<header>
					<Nav><Link to="/chats">Chats</Link></Nav>
					<HeaderTitle>{chat() ? chat.title : chatId}</HeaderTitle>
				</header>
				<PageMessages />
				<FormNewMessage sendMessage={sendMessage}/>
			</section>
		</ActionCableConsumer>
	);
}

const mapStateToProps = state => ({
	chat: state.chats.chats
});

const mapDispatchToProps = dispatch => ({
	dispatch,
	clearMessages: () => dispatch(setMessages([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerMessages);