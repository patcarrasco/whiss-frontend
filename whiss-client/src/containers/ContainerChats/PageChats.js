import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FormSearch from '../../components/FormSearch/FormSearch';
import ListChat from '../../components/ListChat/ListChat';

const Chats = ({filterTerm, chats, sendChat}) => {
	return (
		<Fragment>
			<ListChat chats={chats.filter(c => c.title.toLowerCase().includes(filterTerm.toLowerCase()))} />
			<FormSearch/>
		</Fragment>
	);
}

const mapStateToProps = state => ({
	filterTerm: state.chats.filterTerm,
	chats: state.chats.chats
});

export default connect(mapStateToProps)(Chats);