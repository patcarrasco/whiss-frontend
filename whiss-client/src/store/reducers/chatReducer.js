const initialState = {
	messages: [],
	chats: []
};

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
			const newMessages = [...state.messages, action.payload];
			return {...state, messages: newMessages};
		case "SET_MESSAGES":
			return {...state, messages: action.payload};
		case "SET_CHATS":
			return {...state, chats: action.payload};
		case "CLEAR_STATE": 
			return initialState;
		default:
			return state;
	}
};

export default chatReducer;