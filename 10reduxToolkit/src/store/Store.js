// step 1.
import {configureStore} from "@reduxjs/toolkit"

// step 5
import cakeReducer from "../Slices/cake/cakeSlice"
import iceCreamReducer from "../Slices/iceCream/iceCreamSlice"
import userReducer from "../Slices/users/userSlice"


// initially we will pass empty object, but we can pass anything here like array etc.
const store = configureStore({
    // this is with step 7
    // when we have one reducer, then we will put it in object, we can directly assign it to the key (reducer), and we cann access to intialState of that reducer directly in (useSelector) hook.
    // but when there are many reducers like i have now , then we need the put them inside object, and now if we want to access the initialState of any reducer, we will need to access its key first then the initialState that the redux store is holding. like (state.cake.numOfCake)
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
})

export default store;
// Note In state we have the access to track and updated value of initialState in store
// a. matlab initialState ka jo updated value hoga to store ko os ka access hai through (state))
// b. useDispatch is used to send/update value.
// c. useSelector is used to get and display the value in required component.