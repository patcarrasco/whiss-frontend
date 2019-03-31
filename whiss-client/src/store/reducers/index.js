import appReducer from "./appReducer";
import chatReducer from "./chatReducer";
import wisprReducer from "./wisprReducer";
import messageReducer from "./messageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({app: appReducer, chats: chatReducer, messages: messageReducer, wisprs: wisprReducer});

export default rootReducer;