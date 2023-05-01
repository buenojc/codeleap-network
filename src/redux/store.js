import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";
import { loginReducer } from "./loginReducer";
import { errorReducer } from "./errorReducer";
import { successMessageReducer } from "./successMessageReducer";

const store = configureStore({
    reducer: {
        posts: postReducer,
        user: loginReducer,
        error: errorReducer,
        successMessage: successMessageReducer
    }
  })

export default store;