import './App.css'
import Header from "./components/Haeder"
import { useState } from 'react'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState("")

  // now the useMemo hook will allow the function to only apply on (count state) when the component get render, and if i gave (name state) as dependency then  the function will run when we make change to name state. 
  // the useMemo hook  memorized the value and then return that value.
  // now it will not effect the name state 
  useMemo( () => complexCalculation(count), [count])

  // before using useMemo hook the far loop inside the fuction effect both the count and name state which was a problem. we use useMemo to solve this problem. and allow the function to run only when we make any change in dependency that is passed to useMemo hook 
  function complexCalculation(num){
    console.log("calculation")
    for(let i = 0; i < 100000000; i++){}
    return  num;
  }
  
  return (
    <>
      <Header/>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>Name: {name}</h1>
      <input onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default App

// Note. when we make change in name state the app will re-render and the function with complex calculation will not run , because we have put it inside useMemo hook.
// The complex function will only run when we make change in count state, because it will re-render the app and also the useMemo hook will run as well because we have passed the count as dependency.