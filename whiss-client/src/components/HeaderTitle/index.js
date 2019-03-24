import React from 'react';

const HeaderTitle = props => {
	return (
		<div style={headerStyles}>
			<h2>{props.children}</h2>
		</div>
	);
}
export default HeaderTitle;

const headerStyles = {
	height: "2.8125rem",
	backgroundColor: "#FFF",
	textAlign: "center",
	color: "#444444",
	lineHeight: "1.25",
	fontStyle: "italic",
	padding: "0.6875rem 0.9375rem 0.875rem",
}