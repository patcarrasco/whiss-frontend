import React from 'react';
import ButtonStart from '../../components/ButtonStart/ButtonStart';

const User = ({id, name, username, handleClick}) => {
	return (
		<div className="user-tile">
			<h4>{name}</h4>
			<p>{username}</p>
			<ButtonStart user={{name, username}} onClick={() => handleClick(id)}>Start</ButtonStart>
		</div>
	);
};

export default User;