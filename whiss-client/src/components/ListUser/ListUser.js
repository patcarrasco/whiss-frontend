import React from 'react';
import { connect } from 'react-redux';
import User from "./User";

const ListUser = ({users, sendChat}) => {
	const startChat = (id) => {
		let newChat = {
			title: "Newt Scamander",
			members: [JSON.parse(localStorage.getItem("user"))["id"], id]
		};
		sendChat(newChat);
	};
	const userTiles = users.map(u => <User handleClick={startChat} key={u.id} id={u.id} name={u.name} username={u.username} />);
	
	return (
		<main className="message-list">
			<section>
				{ userTiles }
			</section>
		</main>
	);
};

const mapStateToProps = state => ({
	users: state.app.users
});

export default connect(mapStateToProps)(ListUser);