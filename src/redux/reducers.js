import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { loginReducer } from "./loginReducer";

const reducers = combineReducers({
    posts: postReducer,
    user: loginReducer
})

export default reducers