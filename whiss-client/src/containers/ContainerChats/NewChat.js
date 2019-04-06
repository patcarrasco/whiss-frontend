import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store';
import FormSearch from '../../components/FormSearch/FormSearch';
import Nav from '../../components/Nav/Nav';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import ListUser from '../../components/ListUser/ListUser';

const NewChat = ({users, fetchUsers, sendChat}) =>  {
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<section className="new-chat-page">
			<header>
				<Nav><Link to="/chats">Chats</Link></Nav>
				<HeaderTitle>{"New Chat"}</HeaderTitle>
			</header>
			<ListUser sendChat={sendChat}/>
			<FormSearch placeholder="Search for friends"/>
		</section>
	);
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
	fetchUsers: () => dispatch(fetchUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(NewChat);
