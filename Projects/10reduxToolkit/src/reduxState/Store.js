import {configureStore} from '@reduxjs/toolkit'


import myReducer from './Reducers'


export const myStore = configureStore({
    reducer: myReducer
})


