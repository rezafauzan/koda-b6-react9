import { createSlice } from "@reduxjs/toolkit";

const resultsReducer = createSlice({
    name: "surveyResults",
    initialState: [],
    reducers: {
        addSurveyData: (state, action) => {
            state.push(action.payload)
        },
        removeSurveyData: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const {addSurveyData, removeSurveyData} = resultsReducer.actions
export default resultsReducer.reducer