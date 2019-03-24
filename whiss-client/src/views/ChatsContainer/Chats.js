import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import HeaderButton from '../../components/HeaderButton';
import Nav from '../../components/Nav';

const Chats = ({chats, sendChat}) => {
	const chatItems = chats.map(c => <li key={c.id}><Link to={`/chats/${c.id}`}>{c.title}</Link></li>);
	return (
		<section>
			<header>
				<Nav><Link to="/">Dash</Link></Nav>
				<HeaderButton to="/new-chat">{"New Chat"}</HeaderButton>
				<SearchForm/>
			</header>
			<button onClick={sendChat}>Send Chat</button>
			<ul>
				{chatItems}
			</ul>
		</section>
	);
}

const mapStateToProps = state => ({
	chats: state.chats.chats
});

export default connect(mapStateToProps)(Chats);