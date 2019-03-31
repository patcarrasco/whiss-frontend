import React from 'react';
import { connect } from 'react-redux';
import ListWispr from '../../components/ListWispr/ListWispr';

const PageWisprs = ({ wisprs }) => {
	return (
		<ListWispr wisprs={wisprs} />
	);
}
const mapStateToProps = state => ({
	wisprs: state.wisprs
});

export default connect(mapStateToProps)(PageWisprs);