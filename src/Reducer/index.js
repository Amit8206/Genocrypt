import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer.js";


const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer
})


export default rootReducer;