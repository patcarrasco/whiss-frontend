import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import WisprForm from "../components/WisprForm";

const Dash = ({ wisprs }) => {
	const wisprItems = wisprs.map(w => <li key={w.id}>{w.title}</li>);

	return (
		<section>
			<nav><Link to="/chats">Chats</Link><Link to="/log-out">Log Out</Link></nav>
			<h1>Dash</h1>
			<ul>
				{wisprItems}
			</ul>
			<WisprForm />
		</section>
	);
}

const mapStateToProps = state => ({
	wisprs: state.wisprs.wisprs
});
const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);