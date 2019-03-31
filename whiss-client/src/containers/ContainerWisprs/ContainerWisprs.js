import React from 'react';
import { Link } from 'react-router-dom';
import FormNewWispr from "../../components/FormNewWispr/FormNewWispr";
import Nav from "../../components/Nav/Nav";
import PageWisprs from "./PageWisprs";

const ContainerWisprs = () => {
	return (
		<section className="wispr-page">
			<header>
				<Nav><Link to="/chats">Chats</Link></Nav>
			</header>
			<PageWisprs />
			<FormNewWispr/>
		</section>
	);
}


export default ContainerWisprs;


// import React from 'react';
// import { ActionCableConsumer } from 'react-actioncable-provider';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import FormNewWispr from "../../components/FormNewWispr/FormNewWispr";
// import Nav from "../../components/Nav/Nav";
// import PageWisprs from "./PageWisprs";
// import { sendWispr } from '../../store';

// const ContainerWisprs = ({ dispatch }) => {
// 	const wisprChannel = React.createRef();
// 	const channel = {channel: "WisprChannel"};

// 	const sendWispr = content => {
// 		const wispr = {
// 			user_id: JSON.parse(localStorage.getItem("user")).id,
// 			content
// 		};
// 		wisprChannel.current.send({type: "NEW_WISPR", payload: wispr });
// 	}

// 	return (
// 		<ActionCableConsumer ref={wisprChannel} channel={channel} onRejected={() => console.log("Rejected")} onReceived={dispatch}>
// 			<section className="wispr-page">
// 				<header>
// 					<Nav><Link to="/chats">Chats</Link></Nav>
// 				</header>
// 				<PageWisprs />
// 				<FormNewWispr sendWispr={sendWispr}/>
// 			</section>
// 		</ActionCableConsumer>
// 	);
// }


// const mapDispatchToProps = dispatch => ({
// 	dispatch
// });

// export default connect(null, mapDispatchToProps)(ContainerWisprs);

