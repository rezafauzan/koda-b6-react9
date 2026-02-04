import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "authReducer",
    initialState: {
        email: "",
    },
    reducers: {
        login: (state, action) => {
                state.email = action.payload.email
        },
        logout: () => {
                state.email = ""
        }
    }
})

export const { login, logout } = authReducer.actions
export default authReducer.reducer