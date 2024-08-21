import './App.css'
import Header from "./components/Haeder"
import { useCallback, useState } from 'react'
import Todo from "./components/Todo"



function App() {
  const [count, setCount] = useState(1)
  const [todo, setTodo] = useState([])

  // ++++++++++++++++++ Problem ++++++++++++++++++++++
// Try running this and click the count increment button.
// You will notice that the Todo component re-renders even when the todo do not change.
// Why does this not work? We are using memo, so the Todo component should not re-render since neither the todo state nor the addTodo function are changing when the count is incremented.

// This is because of something called "referential equality".
// Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

//  const addTodo = () =>{
//   setTodo( (t) =>[...t, "New Todo Added."])
//  }

 // ++++++++++++++++++++ solution +++++++++++++++++++++++
// To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary
  // it will memoized the addTodo function and will re-neder the Todo component only when we make any change in (todo) state.
 const addTodo = useCallback( () =>{
  setTodo( (t) =>[...t, "New Todo"])
 }, [todo])

  return (
    <>
      <Header/>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />

      {/* we will send two props to Todo compoonent  */}
      <Todo todos={todo} newTodo={addTodo}/>
    </>
  )
}

export default App

// ++++++++++++++++++++++++++++++++ useCallback Hook +++++++++++++++++++++++++++++++
// The React useCallback Hook returns a memoized callback function.
// Think of memoization as caching a value so that it does not need to be recalculated.

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback Hook only runs when one of its dependencies update.
// This can improve performance.