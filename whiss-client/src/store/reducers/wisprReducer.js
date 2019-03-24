const initialState = {wisprs: []};

const wisprReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_WISPRS":
			return {...state, wisprs: action.payload}
		case "SHOW_MESSAGE":
			console.log(action.payload);
			return state;
		default:
			return state;
	}
};

export default wisprReducer;