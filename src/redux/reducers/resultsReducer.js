import { createSlice } from "@reduxjs/toolkit";

const resultsReducer = createSlice({
    name: "surveyResults",
    initialState: [],
    reducers: {
        addSurveyData: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addSurveyData} = resultsReducer.actions
export default resultsReducer.reducer