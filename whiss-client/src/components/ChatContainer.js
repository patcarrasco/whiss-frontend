import React, {Fragment} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'


class ChatContainer extends React.Component  {

	componentDidMount() {
		
	}

	render() {
		return (
			<Fragment>
				<h1>Chats</h1>
				<ul>
					<li>Chat 1</li>
					<li>Chat 2</li>
					<li>Chat 3</li>
					<li>Chat 4</li>
					<li>Chat 5</li>
				</ul>
			</Fragment>
		);
	}
}

export default ChatContainer;
