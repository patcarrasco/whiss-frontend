import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormNewWispr from "../components/FormNewWispr/FormNewWispr";
import Nav from "../components/Nav/Nav";

const Dash = ({ wisprs }) => {
	const wisprItems = wisprs.map(w => <li key={w.id}>{w.title}</li>);

	return (
		<section className="dash-page">
			<header>
				<Nav><Link to="/chats">Chats</Link></Nav>
			</header>
			<main>
				{wisprItems}
			</main>
			<FormNewWispr />
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