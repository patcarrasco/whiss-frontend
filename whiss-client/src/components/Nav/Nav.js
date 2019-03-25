import React from 'react';
import { Link, withRouter } from 'react-router-dom'


const Nav = props => {
	return (
		<nav style={navStyles} className="main-nav">
			{props.children}
			<p>Wispr</p>
			{!!localStorage.getItem("token") ? (<Link className="log-out" to="/log-out">Log Out</Link>) : null}
		</nav>
	);
}

export default withRouter(Nav);

const navStyles = {

}
