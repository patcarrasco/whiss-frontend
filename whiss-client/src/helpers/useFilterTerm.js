// import { useState } from 'react';
// import { connect } from 'react-redux';
// import { setFilterTerm } from '../../store';

// const useFilterTerm = ({term, setTerm}) => {
	
// 	const checkTermMatch = comp => {
// 		return comp.toLowerCase().includes(term.toLowerCase());
// 	}
// 	return [term, setTerm, checkTermMatch];
// }

// const mapStateToProps = state => ({
// 	term: state.chats.filterTerm
// });
// const mapDispatchToProps = dispatch => ({
// 	setTerm: term => dispatch(setFilterTerm(term))
// });

// export connect(mapStateToProps, mapDispatchToProps)(useFilterTerm);