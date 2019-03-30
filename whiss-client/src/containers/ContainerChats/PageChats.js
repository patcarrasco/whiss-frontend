import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ListChat from '../../components/ListChat/ListChat';

const Chats = ({filterTerm, chats}) => {
	return (
		<Fragment>
			<ListChat chats={chats.filter(c => c.title.toLowerCase().includes(filterTerm.toLowerCase()))} />
		</Fragment>
	);
}

const mapStateToProps = state => ({
	filterTerm: state.chats.filterTerm,
	chats: state.chats.chats
});

export default connect(mapStateToProps)(Chats);