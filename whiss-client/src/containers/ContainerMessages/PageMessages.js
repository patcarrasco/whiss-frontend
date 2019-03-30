import React from 'react';
import { connect } from 'react-redux';
import ListMessage from '../../components/ListMessage/ListMessage';

const PageMessages = ({messages}) => {
	return (
		<ListMessage messages={messages}/>
	);
}

const mapStateToProps = state => ({
	messages: state.chats.messages
});

export default connect(mapStateToProps)(PageMessages);