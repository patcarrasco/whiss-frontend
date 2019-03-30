import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const RoutePrivate = ({ component: Comp, path, loggedIn, ...rest }) => (
	<Route path={path} {...rest} render={props => (
		loggedIn ? <Comp {...props} />: <Redirect to='/' />)}
	/>
);

export default RoutePrivate;