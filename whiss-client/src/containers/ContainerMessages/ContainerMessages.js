import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMessages } from '../../store';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Nav from '../../components/Nav/Nav';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import PageMessages from './PageMessages';
import FormNewMessage from '../../components/FormNewMessage/FormNewMessage';


const ContainerMessages = ({match, dispatch, clearMessages}) => {
	
	useEffect(() => {
		return clearMessages;
	},[]);

	const sendMessage = content => {
		const chatId = match.params.id
		const message = {
			chat_id: chatId,
			content
		};

		messagesChannel.current.send({type: "NEW_MESSAGE", payload: message });
	}
	const messagesChannel = React.createRef();
	const channel = {channel: "MessagesChannel", chat_id: match.params.id};

	return (
		<ActionCableConsumer ref={messagesChannel} channel={channel} onRejected={() => console.log("Rejected")} onReceived={dispatch}>
			<section className="message-page">
				<header>
					<Nav><Link to="/chats">Chats</Link></Nav>
					<HeaderTitle>{"Hi"}</HeaderTitle>
				</header>
				<PageMessages />
				<FormNewMessage sendMessage={sendMessage}/>
			</section>
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch,
	clearMessages: () => dispatch(setMessages([]))
});

export default connect(null, mapDispatchToProps)(ContainerMessages);