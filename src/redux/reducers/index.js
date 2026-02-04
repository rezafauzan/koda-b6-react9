import { combineReducers } from "@reduxjs/toolkit";
import resultsReducer from "./resultsReducer";
import authReducer from "./authReducer";

const reducer = combineReducers(
    {
        resultsReducer: resultsReducer,
        authReducer: authReducer,
    }
)

export default reducer