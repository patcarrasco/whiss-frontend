const initialState = {users:[]};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CLEAR_STATE": 
			return initialState;
		case "SET_USERS":
			return {...state, users: action.payload}
		case "SHOW_MESSAGE":
			console.log(action.payload);
			return state;
		default:
			return state;
	}
};

export default appReducer