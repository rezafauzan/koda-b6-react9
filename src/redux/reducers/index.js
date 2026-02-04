import { combineReducers } from "@reduxjs/toolkit";
import resultsReducer from "./resultsReducer";

const reducer = combineReducers(
    {
        resultsReducer: resultsReducer
    }
)

export default reducer