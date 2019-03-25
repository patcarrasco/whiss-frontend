import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm/SearchForm';
import HeaderButton from '../../components/HeaderButton';
import Nav from '../../components/Nav';
import ChatList from '../../components/ChatList/ChatList';

const Chats = ({filterTerm, chats, sendChat}) => {
	return (
		<section className="chat-page">
			<header>
				<Nav><Link to="/">Dash</Link></Nav>
				<HeaderButton to="/new-chat">{"New Chat"}</HeaderButton>
			</header>
			<ChatList chats={chats.filter(c => c.title.toLowerCase().includes(filterTerm.toLowerCase()))} />
			<SearchForm/>
		</section>
	);
}

const mapStateToProps = state => ({
	filterTerm: state.chats.filterTerm,
	chats: state.chats.chats
});

export default connect(mapStateToProps)(Chats);