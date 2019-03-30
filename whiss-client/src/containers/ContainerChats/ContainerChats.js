import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Nav from '../../components/Nav/Nav';
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import FormSearch from '../../components/FormSearch/FormSearch';
import PageChats from './PageChats';
import NewChat from './NewChat';
import ContainerMessages from '../ContainerMessages/ContainerMessages';

const ContainerChats = ({dispatch}) => {
	const chatsChannel = React.createRef();
	const channel = {channel: "ChatsChannel"};
	const sendChat = (chat = {members:[1,4], title: "How"}) => {
		chatsChannel.current.send({type: "NEW_CHAT", payload: chat });
	}
	return (
		<ActionCableConsumer ref={chatsChannel} channel={channel} onReceived={dispatch}>
			<Switch>
				<Route path="/chats/new" render={() => <NewChat sendChat={sendChat} />} />
				<Route path="/chats/:id" component={ContainerMessages} />
				<Route path="/chats" render={() => (
					<section className="chat-page">
						<header>
							<Nav><Link to="/">Dash</Link></Nav>
							<HeaderButton to="/chats/new">{"New Chat"}</HeaderButton>
						</header>
						<PageChats />
						<FormSearch placeholder="Search chats"/>
					</section>)}
				/>
			</Switch>
		</ActionCableConsumer>
	);
}

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(null, mapDispatchToProps)(ContainerChats);