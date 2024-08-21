import { createSlice, nanoid } from "@reduxjs/toolkit";

// we can pass object as well as array
const initialState = {
    // we have an array myTodos, where can have many todo objects initialy, and later we will add more objects through addTodo method dynamically.
    myTodos: [{id: 1, text: "Abdullah khan"}]
}


export const mySlice = createSlice({
    // Every slice has name, Name is the property of object which is in redux toolkit, the (khan) will show on redux toolkit chrome extension
    name: "khan",

    // every slice has initial state. and for better understanding we declare it above.
    initialState,

    // Then we create reducers. and we have property and will pass Functon as value inside the reducers object
    // and here is the difference with context api, in context api we only declare the functions, but here we declare and define the functions, as we define (addTodo()) and (removeTodo()).
    reducers: {
        // in these  function we will always have two arguments, state and action. state refer to the the value of (initialState). mean wahtever in initialState we will have that in (state)
        // action is used for making any change. it take the value we put in input field and set in the text property.
        addTodo: (state, action) =>{
            // first we will create an object newTodo.
            // we will add newTodo dynamically to the array in initialState.
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            // now we will set newTodo in the (initialState) through (state). in initialState we have an array myTodos, so we will add one object each time we click on add button in the array (myTodods).
            state.myTodos.push(newTodo)
        },

        removeTodo: (state, action)=>{
            state.myTodos = state.myTodos.filter( (obj) =>{
               return obj.id !== action.payload
            })
            // it mean remove only that newTodo object whose id dose not match action.payload. filter only gave us true value. it does not gave false value.
        }
    }
})


export const { addTodo, removeTodo} = mySlice.actions



// all the values that we get inside state are goes to const (mySlice).
export default mySlice.reducer
// this will make available (myReducer) to the store.

