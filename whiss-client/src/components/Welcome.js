import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

const Welcome = (props) => {
	return (
		<Fragment>
			<Link to="/login">Login</Link>
			<Link to="/sign-up">Sign Up</Link>
		</Fragment>
	);
}

export default Welcome;
