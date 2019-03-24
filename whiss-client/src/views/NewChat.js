import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../store';
import { connect } from 'react-redux';
import StartChatButton from '../components/StartChatButton';
import SearchForm from '../components/SearchForm';

const NewChat = ({users, fetchUsers}) =>  {
  const startButtons = users.map(u => <li key={u.id}><StartChatButton user={u}/></li>);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
  	<section>
  		<nav>
  			<Link to="/chats">Chats</Link>
  			<Link to="/log-out">Log Out</Link>
  		</nav>
			<h1>New Chat</h1>
      <SearchForm/>
      <ul>
        {startButtons}
      </ul>
  	</section>
  );
}
const mapStateToProps = state => ({
  users: state.chats.users
});
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(NewChat);
