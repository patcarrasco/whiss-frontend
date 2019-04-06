import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterTerm } from '../../store';
import Input from '../Input/Input';

const FormSearch = ({term, setTerm, placeholder}) => {
	useEffect(()=> {
		return () => setTerm("");
	},[]);
	return (
		<footer>
			<form className="search-form" onSubmit={e => e.preventDefault()}>
				<Input type="text" placeholder={placeholder} value={term} onChange={e => setTerm(e.target.value)} />
			</form>
		</footer>
	);
}

const mapStateToProps = state => ({
	term: state.chats.filterTerm
});
const mapDispatchToProps = dispatch => ({
	setTerm: term => dispatch(setFilterTerm(term))
});
export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);