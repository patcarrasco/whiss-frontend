import React from 'react';
import { connect } from 'react-redux';
import ButtonStart from '../../components/ButtonStart/ButtonStart';
import User from "./User";

const ListUser = ({users}) => {
	const userTiles = users.map(u => <User key={u.id} id={u.id} name={u.name} username={u.username} />);
	
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