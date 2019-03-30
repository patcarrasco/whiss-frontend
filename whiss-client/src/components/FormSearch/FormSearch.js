import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterTerm } from '../../store';
import Input from '../Input/Input';

const FormSearch = ({filterTerm, setFilterTerm, placeholder}) => {
	useEffect(()=> {
		return () => setFilterTerm("");
	},[]);
	return (
		<footer>
			<form className="search-form">
				<Input type="text" placeholder={placeholder} value={filterTerm} onChange={e => setFilterTerm(e.target.value)} />
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