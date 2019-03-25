import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Input from '../Input';
import { setFilterTerm } from '../../store';

const FormSearch = ({filterTerm, setFilterTerm}) => {
	useEffect(()=> {
		return () => setFilterTerm("");
	},[]);
	return (
		<footer>
			<form className="search-form">
				<Input type="text" placeholder="Search" value={filterTerm} onChange={e => setFilterTerm(e.target.value)} />
			</form>
		</footer>
	);
}
const mapStateToProps = state => ({
	filterTerm: state.chats.filterTerm
});
const mapDispatchToProps = dispatch => ({
	setFilterTerm: term => dispatch(setFilterTerm(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);