import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewWisprForm from "../components/NewWisprForm/NewWisprForm";
import Nav from "../components/Nav";

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
			<NewWisprForm />
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