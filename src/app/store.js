import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers( {
    user: userReducer,
});

export default allReducers;
