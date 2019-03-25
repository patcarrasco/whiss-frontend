export const clearState = () => ({type: "CLEAR_STATE"});
export const setMessages = data => ({type: "SET_MESSAGES", payload: data });
export const setChats = data => ({type: "SET_CHATS", payload: data });
export const setUsers = data => ({type: "SET_USERS", payload: data });
export const sendChat = data => ({type: "NEW_CHAT", payload: data });
export const sendMessage = data => ({type: "NEW_MESSAGE", payload: data });
export const sendWispr = data => ({type: "NEW_WISPR", payload: data });
export const setFilterTerm = data => ({type: "SET_FILTER_TERM", payload: data});