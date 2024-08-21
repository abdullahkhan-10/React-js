import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    numOfIcecream: 20
}
const iceCreamSlice = createSlice({
    name: "Icecream",
    initialState,
    reducers: {
        iceCreamOrdered: (state)=>{
            state.numOfIcecream--
        },

        iceCreamRestocked: (state, action)=>{
            state.numOfIcecream += action.payload
        }
    }

})

export const {iceCreamOrdered, iceCreamRestocked} = iceCreamSlice.actions

export default iceCreamSlice.reducer;