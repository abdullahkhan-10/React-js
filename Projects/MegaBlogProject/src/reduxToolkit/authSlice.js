import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

// in slice we track the authentication, we check that either user is authenticated or not, by asking from store.
const authSlice = createSlice({
    name: "khanAuth",
    initialState,
    reducers: {
        login: (state, action) =>{
            state.status = true,
            state.userData = action.payload.userData
        },

        logOut: (state) =>{
            state.status = false,
            state.userData = null
        }
    }
})


// we also export functions of reducer, because the components then use those functions to know the state or dispatch from method. the functions inside reducer are called actions.
export const {login, logOut} = authSlice.actions

export default authSlice.reducer
// export reducer from authSlice.