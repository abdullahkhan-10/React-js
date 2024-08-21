
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../reduxState/Reducers";

function AllTodos() {
    const dispatch = useDispatch();

  // in useSelector we have the access of state in callback function.
  const myAllTodos = useSelector((state) => {
    // we will return the array which the state is holding currently in (initialState) which is myTodos.
    return state.myTodos;
  });
  // as we can not acces myTodos array directly here, because the state is holding it.
  // we store that array in const (myAllTodos). so myAllTodos is an array which consist of all the todos objects.

  return (
    <>
      <div className="ml-64 my-4">Todos</div>
      <ul className="list-none">
        {myAllTodos.map((obj) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={obj.id}
          >
            <div className="text-white">{obj.text}</div>
            <button
              onClick={() => dispatch(removeTodo(obj.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AllTodos;

// Note.
// in onClick only gave reference of function like(myFunction), we can not call the function like (myFunction()).
// because when we call the function it will automaically fire.
// but in onClick case we want to fire the function when we click on button, so will gave only refernce of the function.

// same code as above in return but it is without tailwind css.
//  here we list all todos objects.
//     <div>
//         {
//             myAllTodos.map( (obj) =>{
//                 <li key={obj.id}>
//                     {obj.text}
//                     <button onClick={() => dispatch(removeTodo(obj.id))}></button>
//                     {/* here we are passing call back function, because we need to pass an argument to (removeTodo()) function, and in onClick case we can not call the function mean we can not add round brackets, in onClick we can only gave reference to the functon. so to solve the problem we will use a call back function. */}
//                 </li>

//             })
//         }
//     </div>