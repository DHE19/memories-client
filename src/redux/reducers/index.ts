
import { combineReducers } from "redux";
import postReducer from "./posts";
import authReducer from "./auth";

export const rootReducer = combineReducers({
    posts: postReducer,
    auth: authReducer,
});


export type AppState = ReturnType<typeof rootReducer>;