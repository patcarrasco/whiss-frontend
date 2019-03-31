const initialState = [];

const wisprReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_WISPRS":
			return [...action.payload];
		case "ADD_WISPR":
			return [...state, action.payload];
		case "CLEAR_STATE":
			return initialState;
		default:
			return state;
	}
};

export default wisprReducer;