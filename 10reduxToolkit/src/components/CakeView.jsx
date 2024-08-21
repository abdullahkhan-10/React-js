// step  7
// The (useSelector) hook is used to get hold of any state that is maintain in readux store.
// in our example we need to aceess the (nuOfCakes) which is store in (cakeSlice.js) and display in here in(CakeView.jsx) component. 
import {useSelector} from "react-redux"

//Step 8
// The (useDispatch) hook is used to dispatch an action with react redux.
// dispatch make changes in store through reducer.
import { useDispatch } from "react-redux";
import { cakeOrdered, cakeRestocked } from "../Slices/cake/cakeSlice";


const CakeView = () => {
  // called this useSelector inside component, this hook accept a function as parameter, and this function is called a selector function, and it recieve the redux store state as an argument, and the function then return a value.

  // useSelector return whatever is return by the selector function, lets save it in const. The final step is to include this constant in jsx.
  // This is how we access the state value from redux store.
  const numberOfCakes = useSelector( (state) =>{
    return state.cake.numOfCake
    // here state refere to the redux store state, which containe multiple reducers, where we have put all the reducers in object and assign each reducer to their property. like we assign (cakeReducer) to the (cake) property.
  })

  // This hook return a reference to the dispatch function from redux stor, lets save this preference in const called (dispatch).
  // This constant can now be used to dispatch action when needed
  const dispatch = useDispatch()

  return (
    <div className="cake">
      <h2>Number of cakes -{numberOfCakes} </h2>
      <button onClick={() => dispatch(cakeOrdered())}>Order Cake</button>
      <button onClick={() => dispatch(cakeRestocked(5))}>Restock Cakes</button>
      {/* This 5 that we are passing to the (cakeRestocked) function as an argument, this is the actual action, and we recieve this argument in (cakeRestocked) function as parameter (action) in (cakeSlice.js) file, Then we accesee this 5 quantities of cakes in (action.payload) and set it in (state.numOfCake) to add this 5 quantities each time we click on this button */}
    </div>
  );
};

export default CakeView;

// Note. So to read data from the redux store in a react component we use the (useSelector) hook.