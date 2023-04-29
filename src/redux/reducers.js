import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { loginReducer } from "./loginReducer";
import { errorReducer } from "./errorReducer";

const reducers = combineReducers({
    posts: postReducer,
    user: loginReducer,
    error: errorReducer
})

export default reducers