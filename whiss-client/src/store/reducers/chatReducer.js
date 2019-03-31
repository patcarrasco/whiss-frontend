const initialState = {
	chats: [],
	filterTerm: ""
};

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CHAT":
			const newChats = [action.payload, ...state.chats];
			return {...state, chats: newChats};
		case "SET_CHATS":
			return {...state, chats: action.payload};
		case "SET_FILTER_TERM": 
			return {...state, filterTerm: action.payload};
		case "CLEAR_STATE": 
			return initialState;
		default:
			return state;
	}
};

export default chatReducer;