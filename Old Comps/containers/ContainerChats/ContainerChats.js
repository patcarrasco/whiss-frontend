import React from 'react';
import { connect } from 'react-redux';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Chats from './Chats';

const ChatsContainer = ({dispatch}) => {
	const chatsChannel = React.createRef();
	const channel = {channel: "ChatsChannel"};
	const sendChat = () => {
		const chat = {members:[1,4], title: "Howdy"}
		chatsChannel.current.send({type: "NEW_CHAT", payload: chat });
	}
	return (
		<ActionCableConsumer ref={chatsChannel} channel={channel} onReceived={dispatch}>
			<Chats sendChat={sendChat} />
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(ChatsContainer);