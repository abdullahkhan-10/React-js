import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const myStore = configureStore({
    reducer: {
        auth: authSlice,
        // we will add more slices here for posts.
    }
})

export default myStore;