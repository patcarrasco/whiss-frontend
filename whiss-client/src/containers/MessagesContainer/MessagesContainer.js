import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMessages } from '../../store';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Messages from './Messages';

const MessagesContainer = ({match, dispatch, clearMessages}) => {
	
	useEffect(() => {
		return clearMessages;
	},[]);

	const messagesChannel = React.createRef();
	const channel = {channel: "MessagesChannel", chat_id: match.params.id};
	const sendMessage = (message) => {
		messagesChannel.current.send({type: "NEW_MESSAGE", payload: message });
	}
	return (
		<ActionCableConsumer ref={messagesChannel} channel={channel} onRejected={() => console.log("Rejected")} onReceived={dispatch}>
			<Messages sendMessage={sendMessage} chatId={match.params.id} />
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch,
	clearMessages: () => dispatch(setMessages([]))
});

export default connect(null, mapDispatchToProps)(MessagesContainer);