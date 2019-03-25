import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Nav from '../../components/Nav/Nav';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import PageChats from './PageChats';

const ContainerChats = ({dispatch}) => {
	const chatsChannel = React.createRef();
	const channel = {channel: "ChatsChannel"};
	const sendChat = (chat = {members:[1,4], title: "How"}) => {
		chatsChannel.current.send({type: "NEW_CHAT", payload: chat });
	}
	return (
		<ActionCableConsumer ref={chatsChannel} channel={channel} onReceived={dispatch}>
			<section className="chat-page">
				<header>
					<Nav><Link to="/">Dash</Link></Nav>
					<ButtonHeader to="/new-chat">{"New Chat"}</ButtonHeader>
				</header>
				<PageChats sendChat={sendChat} />
			</section>
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(ContainerChats);