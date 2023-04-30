import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { loginReducer } from "./loginReducer";
import { errorReducer } from "./errorReducer";


const store = configureStore({
    reducer: {
        posts: postReducer,
        user: loginReducer,
        error: errorReducer
    }
  })

export default store;