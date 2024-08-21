import { useSelector, useDispatch } from "react-redux";
import { iceCreamOrdered, iceCreamRestocked } from "../Slices/iceCream/iceCreamSlice";
import { useState } from "react";

const IceCreamView = () => {
  const [myValue, setValue] = useState(1)

  // useSelector
  const numberOfIcecreams = useSelector( (state) =>{
    return state.iceCream.numOfIcecream;
  })

  // useDispatch
  const dispatch = useDispatch()

  return (
    <div className="ice-cream">
      <h2>Number of ice creams - {numberOfIcecreams} </h2>
      <button onClick={() => dispatch(iceCreamOrdered())}>Order Ice cream</button>

      <input
       type="number" 
       value={myValue}
       onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() =>dispatch(iceCreamRestocked(myValue))}>
        Restock Ice creams
      </button>
      {/* Instead of sending hard coded value like 4. we can allow user to send the value through input field, For this we will use inputField and (useState) hook, the (useState) hook will set the value of inputfield in a variable (myValue), and then the variable will be pass to the (iceCreamRestocked) function as in argument to add quautities of icecream dynamically. */}
    </div>
  );
};

export default IceCreamView;
