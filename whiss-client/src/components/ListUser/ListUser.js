import React from 'react';
import { connect } from 'react-redux';
import User from "./User";

const ListUser = ({users, sendChat, term}) => {

	const startChat = (id) => {
		let newChat = {
			title: "Newt Scamander",
			members: [JSON.parse(localStorage.getItem("user"))["id"], id]
		};
		sendChat(newChat);
	};

	const checkUser = u => {
		const checkTermMatch = comp => {
			return comp.toLowerCase().includes(term.toLowerCase());
		}
		return checkTermMatch(u.username) || checkTermMatch(u.name);
	};
	const userTiles = users.filter(checkUser).map(u => <User handleClick={startChat} key={u.id} id={u.id} name={u.name} username={u.username} />);
	
	return (
		<main className="user-list">
			<section>
				{ userTiles }
			</section>
		</main>
	);
};

const mapStateToProps = state => ({
	term: state.chats.filterTerm,
	users: state.app.users
});

export default connect(mapStateToProps)(ListUser);