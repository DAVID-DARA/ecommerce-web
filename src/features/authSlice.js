import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = false;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})


export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;