import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

// +++++++++++++++++++++++++++++++++ 1. Handling Forms ++++++++++++++++++++++++++
// Handling forms is about how you handle the data when it changes value or gets submitted.
// In HTML, form data is usually handled by the DOM.
// In React, form data is usually handled by the components.
// When the data is handled by the components, all the data is stored in the component state.

// You can control changes by adding event handlers in the onChange attribute.
// We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

// function App() {
//   const [name, setName] = useState("")

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <form>
//           <label>
//             Enter your name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <h3>{name}</h3>
//         </form>
//       </div>
//     </>
//   );
// }
// export default App;

// +++++++++++++++++++++++++++++++++ 2. Submitting Forms ++++++++++++++++++++++++++
// You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

function App() {
  const [name, setName] = useState("")

  // This  function is for when we click on submit button, where should the form data goes is decide within this function.
  const clickHandle = (e)=>{
    e.preventDefault()
    // here in function we will play with form data, mean sending data to backend or server.
    console.log(`The name that you enter in input field is ${name}.`);
  }

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={clickHandle}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {/* when we click on the submit button the onSubmit attribute of form will fire the clickHandler function and will log the name in console. or send the name to backend. */}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
export default App;




// +++++++++++++++++++++++++++++++++ 2. Multiple Input Fields ++++++++++++++++++++++++++
// You can control the values of more than one input field by adding a name attribute to each element.
// We will initialize our state with an empty object.

// To access the fields in the event handler use the event.target.name and event.target.value syntax.
// To update the state, use square brackets [bracket notation] around the property name.

// function App() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name
//     const value = event.target.value
//     // in  name we get the (username and age) and in value we get (inputs.username and inputs.age)
//     // the setInputs method set an object in inputs state
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const clickHandle = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <form onSubmit={clickHandle}>
//           <label>
//             Enter your name:
//             <input
//               type="text"
//               name="username"
//               value={inputs.username || ""}
//               onChange={handleChange}
//             />
//           </label>
//           <br />

//           <label>
//             Enter your age:
//             <input
//               type="number"
//               name="age"
//               value={inputs.age || ""}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <input type="submit" />
//         </form>
//       </div>
//     </>
//   );
// }
// export default App;
