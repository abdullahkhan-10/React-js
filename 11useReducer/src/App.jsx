import { useReducer } from 'react'
import './App.css'
import Header from "./components/Header"

// The reducer function contains your custom state and action parameters.
// in state we get the initialstate which is one, and in action we get the object that we dispatch from button.
const myReducer = (state, action)=>{
  // console.log("State:" , state);
  // console.log("Action:" , action);

  if(action.type === "INC"){
    return state + 2
  }else if (action.type === "DEC") {
    return state - 2
  }else if (action.type === "MUL") {
    return state * 2
  }

  return state
}

function App() {
  // The useReducer Hook accepts two arguments. reducer and initial state which is 1 here.
  // The useReducer Hook returns the current state and a dispatchmethod.
  const [myState, dispatch] = useReducer(myReducer, 1)

  // we define the function here, and then will called in the button which has Increment option.
  // we will dispatch object to the state when we click on button
  const IncFunction = ()=>{
    dispatch({type: "INC"})
  }
  return (
    <>
      <Header/>

      <h1>{myState}</h1>
      <button onClick={IncFunction}>Increment</button>
      {/* we can also called the callback function */}
      <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
      <button onClick={() => dispatch({type: "MUL"})}>Multiply</button>
    </>
  )
}

export default App
