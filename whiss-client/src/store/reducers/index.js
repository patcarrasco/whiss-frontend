import appReducer from "./appReducer";
import chatReducer from "./chatReducer";
import wisprReducer from "./wisprReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({app: appReducer, chats: chatReducer, wisprs: wisprReducer});

export default rootReducer;