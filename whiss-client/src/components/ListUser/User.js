import React from 'react';

const User = ({name, username}) => {
	return (
		<div className="user-tile">
			<h4>{name}</h4>
			<p>{username}</p>
		</div>
	);
};

export default User;