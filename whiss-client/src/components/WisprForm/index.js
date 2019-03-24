import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendWispr } from '../../store';
import { ActionCableConsumer } from 'react-actioncable-provider';
import SendButton from '../SendButton';



const WisprForm = ({ dispatch }) => {
	const [content, setContent] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		// Send Wispr
		// sendWispr(content);
	}
	const wisprsChannel = React.createRef();
	const channel = {channel: "WisprsChannel"};
	const sendWispr = (wispr) => {
		wisprsChannel.current.send(sendWispr(wispr));
	}
	return (
		<ActionCableConsumer ref={wisprsChannel} channel={channel} onReceived={dispatch}>
			<div>
				<h3>Send a new Wispr…</h3>
				<form onSubmit={handleSubmit}>
					<input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Aa" />
					<SendButton/>
				</form>
			</div>
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(WisprForm);