const initialState = [];

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
			return [...state, action.payload];
		case "REMOVE_MESSAGE":
			return state.filter(m => m.id !== action.payload);
		case "SET_MESSAGES":
			return action.payload;
		case "CLEAR_STATE": 
			return initialState;
		default:
			return state;
	}
};

export default messageReducer;