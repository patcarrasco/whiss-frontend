export const clearState = () => ({type: "CLEAR_STATE"});
export const setMessages = data => {
	return {type: "SET_MESSAGES", payload: data }
};
export const setChats = data => {
	return {type: "SET_CHATS", payload: data }
};
export const setUsers = data => {
	return {type: "SET_USERS", payload: data }
};
export const sendChat = data => {
	return {type: "NEW_CHAT", payload: data }
};
export const sendMessage = data => {
	return {type: "NEW_MESSAGE", payload: data }
};
export const sendWispr = data => {
	return {type: "NEW_WISPR", payload: data }
};