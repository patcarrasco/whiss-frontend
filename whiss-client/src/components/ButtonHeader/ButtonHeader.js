import React from 'react';
import { withRouter, Link } from 'react-router-dom'

const ButtonHeader = props => {
	return (
		<header style={headerStyles}>
			<Link style={linkStyles} to={props.to}>
				<h2>{props.children}</h2>
				<svg className="plus-icon" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.8 10.2040466H0V6.8h6.8V0h3.4v6.8H17v3.4040466h-6.8V17H6.8z" fill="#444" fillRule="evenodd"/>
				</svg>
			</Link>
		</header>
	);
}
export default withRouter(ButtonHeader);

const headerStyles = {
	height: "2.8125rem",
	backgroundColor: "#FFF",
	textAlign: "center",
	color: "#444444",
	lineHeight: "1.25",
	fontStyle: "italic",
}
const linkStyles = {
	position: "relative",
	padding: "0.6875rem 0.9375rem 0.875rem",
	display: "block",
	color: "#444444"
}