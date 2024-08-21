import { useState } from "react";
import Header from "./Header";
import "./App.css";

function App() {
  // with this approach the state of number will not update in UI while click on addNumber button. To solve this problem we will use react (useState hook)
  // let number = 1

  const [number, setNumber] = useState(5);

  const addNumber = () => {
    // console.log("Clicked", Math.random());
    // number = number + 1
    if (number < 15) {
      setNumber(number + 1);
    }
  };

  const decreaseNumber = () => {
    // console.log("Remove Click", Math.random());
    // number = number - 1
    if (number > 0) setNumber(number - 1);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="counter">

          <h2>Count: {number}</h2>
          <button onClick={addNumber}>Add value </button>

          <br /> <br />
          <button onClick={decreaseNumber}>remove value </button>

          {/* when ever the number variable is, its state will be change there. */}
          <h2>Another count: {number}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
