import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    numOfCake: 10
}

/// step 2
// First we will assign the function to the const keyword (mySlice).
// it takes an object
// In object we specify three properties.
const cakeSlice = createSlice({
    name: "Cake",
    initialState,

    // In the object we specify individual state transition.
    reducers: {
        cakeOrdered: (state) =>{
            // now we can directly mutate the state
            state.numOfCake--
        },
        // in action we will get the value that we will pass to this method as an argument.
        cakeRestocked: (state, action)=>{      
            state.numOfCake += action.payload
        }
        // that number of cakes will be restocked when we pass 5 as an argument to this function, when dispatch
    }
})

// step 3
// first of all we will export all the functionality inside reducers, because we will update the state through these functionality. we will use them in different compoonents.

// the action provide these functions.
// The methods inside reducers are called actions, that's why we write (mySlice.actons) here.
export const {cakeOrdered, cakeRestocked} = cakeSlice.actions


// step 4 
// we need to make the store aware of all the reducers, because the store will not take and updadte the values from any reducers.
// it will only take the values of those reducers who are register with store and then will update them. that's why it need the list of all the reducers
// and that's why will export the  entire (createSlice()) method.
export default cakeSlice.reducer


// all the values that we get inside state are goes to const (cakeSlice).
// this will make available (myReducer) to the store.
