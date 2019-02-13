import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import PublicOnlyRoute from './components/PublicOnlyRoute';
import PrivateRoute from './components/PrivateRoute';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

class App extends React.Component {
	API_URL = "http://localhost:3000/api/v1";

	login = (loginObject) => {
		fetch(this.API_URL + "/login", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify(loginObject)
  	})
  	.then(res => res.json()).then(json => {
			if(!!json.token) {
  			localStorage.setItem("token", json.token);
        this.props.history.replace("/")
			} else {
				alert(json.message)
			}
		});
  }
  signUp = (signUpObject) => {
  	fetch(this.API_URL + "/sign-up", {
  		method: "Post",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify(signUpObject)
  	})
  		.then(res => res.json())
  		.then(json => {
  			if(json.token) {
	  			localStorage.setItem("token", json.token);
          this.props.history.replace("/")
  			} else {
  				alert(json.message)
  			}
  		});
  }


  render() {	
		return (
			<div className="App">
				<Switch>
					<Route path="/login" render={(props) => <Login {...props} handleSubmit={this.login} />} />
					<Route path="/sign-up" render={(props) => <SignUp {...props} handleSubmit={this.signUp} />} />
					<PublicOnlyRoute path='/welcome' component={Welcome} />
					<PrivateRoute path='/' component={Home} />
				</Switch>
	    </div>
	  );
  }
}

export default withRouter(App);