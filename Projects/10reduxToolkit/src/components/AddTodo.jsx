import { useState } from "react";
import { addTodo } from "../reduxState/Reducers";

import {useDispatch} from "react-redux"

function AddTodo(){
    const [input, setInput] = useState("")

    // dispatch make changes in store through reducer.
    const dispatch = useDispatch()

    // when we submit the form this function will fire.
    function addTodoHandler(e){
        e.preventDefault()

        // through dispatch method we send the value as an argument from input Field to addTodo function, that we have defined in (Reducers.js) files
        dispatch(addTodo(input))

        // to clean the input field after sending the value.
        setInput("")
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 mx-auto ml-36">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
