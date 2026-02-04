import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "authReducer",
    initialState: {
        email: "",
    },
    reducers: {
        login: (state, action) => {
                state.email = action.payload.email
        }
    }
})

export const { login } = authReducer.actions
export default authReducer.reducer