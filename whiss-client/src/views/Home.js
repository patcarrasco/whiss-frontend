import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { clearState } from '../store';
import { ActionCableProvider } from 'react-actioncable-provider';
import { WS_URL } from '../constants';
import Dash from './Dash';
import ChatsContainer from './ChatsContainer/ChatsContainer';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import NewChat from './NewChat';
import LogOut from './LogOut';

const Home = props => {
	if (!localStorage.getItem("token")) {
		return <Redirect to="/login" />;
	} else {
		return (
			<ActionCableProvider url={WS_URL + `?token=${localStorage.getItem("token")}`}>
				<Switch>
					<Route path="/chats/:id" component={MessagesContainer} />
					<Route path="/chats" component={ChatsContainer} />
					<Route path="/new-chat" component={NewChat} />
					<Route path="/log-out" component={LogOut} />
					<Route path="/" component={Dash} />
				</Switch>
			</ActionCableProvider>
		);
	}
}

const mapDispatch = dispatch => ({
	clearState: () => dispatch(clearState())
});

export default withRouter(connect(null, mapDispatch)(Home));
