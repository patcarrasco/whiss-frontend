// import React from 'react';
// import FormNewMessage from '../FormNewMessage/FormNewMessage';



// const FormNewWispr = ({ sendWispr }) => {
// 	return (
// 		<FormNewMessage title={"Send a Wispr…"} sendMessage={sendWispr} />
// 	);
// }

// export default FormNewWispr;

import React from 'react';
import { connect } from 'react-redux';
import { ActionCableConsumer } from 'react-actioncable-provider';
import FormNewMessage from '../FormNewMessage/FormNewMessage';



const FormNewWispr = ({ dispatch }) => {
	const wisprChannel = React.createRef();
	const channel = {channel: "WisprChannel"};
	const sendWispr = (content) => {
		const wispr = {
			user_id: JSON.parse(localStorage.getItem("user")).id,
			content
		};
		wisprChannel.current.send({type: "NEW_WISPR", payload: wispr});
	}
	return (
		<ActionCableConsumer ref={wisprChannel} channel={channel} onReceived={dispatch}>
			<FormNewMessage title={"Send a Wispr…"} sendMessage={sendWispr} />
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(FormNewWispr);