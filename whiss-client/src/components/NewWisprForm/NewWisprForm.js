import React from 'react';
import { connect } from 'react-redux';
import { sendWispr } from '../../store';
import { ActionCableConsumer } from 'react-actioncable-provider';
import NewMessageForm from '../NewMessageForm/NewMessageForm';



const NewWisprForm = ({ dispatch }) => {
	const wisprsChannel = React.createRef();
	const channel = {channel: "WisprsChannel"};
	const sendWispr = (wispr) => {
		wisprsChannel.current.send(sendWispr(wispr));
	}
	return (
		<ActionCableConsumer ref={wisprsChannel} channel={channel} onReceived={dispatch}>
			<NewMessageForm title={"Send a Wispr…"} sendMessage={sendWispr} />
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(NewWisprForm);