import { createSlice } from "@reduxjs/toolkit";

// const [state, [[addData,removeData]] = useState(initialState)
const resultsReducer = createSlice({
    name: "surveyResults",
    initialState: [],
    reducers: {
        addData: (state, action) => {
            state.push(action.payload)
        },
        removeData: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const {addData, removeData} = resultsReducer.actions
export default resultsReducer.reducer