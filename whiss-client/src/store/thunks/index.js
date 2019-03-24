import { API_URL } from '../../constants';
import { setUsers } from '../../store';

export const login = (loginObject, history) => {
	return (dispatch) => {
		fetch(API_URL + "/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginObject)
		})
		.then(res => res.json())
		.then(json => {
			if(!!json.token) {
				localStorage.setItem("token", json.token);
				localStorage.setItem("user", JSON.stringify(json.user));
				history.push("/");
			} else {
				alert(json.message);
			}
		});	
	}
}
export const fetchUsers = () => {
	return dispatch => {
		fetch(API_URL + "/users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(json => {
			dispatch(setUsers(json));
		});	
	}
}