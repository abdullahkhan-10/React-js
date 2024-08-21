import "./App.css";
import Header from "./Header";
import { useState, useRef, useEffect } from "react";

// +++++++++++++++++++++++++++++++++ 3. Tracking State Changes ++++++++++++++++++++++++++++++++++++++++
// The useRef Hook can also be used to keep track of previous state value
// This is because we are able to persist(continue/keep on) useRef values between renders.

function App() {
  const [input, setInput] = useState("");
  const prevState = useRef("@") // when we render the app, initially we will have this (@) sign as previouse value.

  // the useEffect will run the code only when we render the app and when we make change in dependency (input).
  useEffect(()=>{
    // here prevState is an object, which hold the current property which has empty value, so in this property we are updating the the value that we have recieve in variable (input)
    prevState.current = input;
  },[input])

  return (
    <div className="App">
      <Header/>

      {/* onChange expect a funtion, so here we passed callback function, when ever change occure this callback function will be called, and will store the value we have entered in variable (input). */}
      <input value={input} onChange={ (event) => setInput(event.target.value)}/> 

      {/* and we are showing all the previouse values here. */}
      <h4>Previouse state was {prevState.current} </h4>
    </div>
  );
}

export default App;


// ++++++++++++++++++++++++++++++++ 2. Accessing DOM Elements ++++++++++++++++++++++++++++++++++++++++
// In vanila javascript we access the DOM using getElementById and querySelector method etc. but in react we use (useRef Hook)
// In general, we want to let React handle all DOM manipulation.
// But there are some instances where useRef can be used without causing issues.
// In React, we can add a ref attribute to an element to access it directly in the DOM.

// function App() {

//   const inputField = useRef()
 
//   function clickButton(){
//     // inputField.current.focus();
//     inputField.current.value = "Abdullah khan"
//     inputField.current.style.border = "2px solid red"
//   }

//   return (
//     <div className="App">
//       <Header/>
//       <input ref={inputField} />
//       <button onClick={clickButton}> Click Me</button>
//       {/* when we click on the button, it will automatically update the prperties in input tag with the help of ref (inputField) */}
//     </div>
//   );
// }

// export default App;


// ++++++++++++++++++++++++++++++ 1. Does Not Cause Re-renders +++++++++++++++++++++++++++++++++++++++
// useRef can be used to store a mutable value that does not cause a re-render when updated.

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   // const [count, setCount] =useState(0)
//   const count = useRef(0) // initially we have count.current = 0

//   // when ever we type anything in input the app will render and the useEffect will run code and will increase value.
//   useEffect(()=>{
//     // it will cause re-render mean infinite loop, to avoide this we use useRef Hook
//     // setCount(count + 1)

//     //here count act as an object and current is a key of the value 0, this does'n cause re-render
//     count.current = count.current + 1;        
//   })

//   function setValue(event){
//     setInputValue(event.target.value) // the setInput function store the value we enter in variable (inputValue).
//   }

//   return (
//     <div className="App">
//       <Header/>
//       <input value={inputValue} onChange={setValue}/>
//       <h4>Application has been rendered {count.current} times</h4>
//     </div>
//   );
// }

// export default App;
