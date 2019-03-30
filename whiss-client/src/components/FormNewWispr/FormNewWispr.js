import React from 'react';
import { connect } from 'react-redux';
import { sendWispr } from '../../store';
import { ActionCableConsumer } from 'react-actioncable-provider';
import FormNewMessage from '../FormNewMessage/FormNewMessage';



const FormNewWispr = ({ dispatch }) => {
	const wisprsChannel = React.createRef();
	const channel = {channel: "WisprsChannel"};
	const sendWispr = (wispr) => {
		wisprsChannel.current.send(sendWispr(wispr));
	}
	return (
		<ActionCableConsumer ref={wisprsChannel} channel={channel} onReceived={dispatch}>
			<FormNewMessage title={"Send a Wispr…"} sendMessage={sendWispr} />
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(FormNewWispr);