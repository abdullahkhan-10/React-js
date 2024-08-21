import { memo } from "react";

function Todo({todos, newTodo}){
    console.log("Todo component re-nder");

    return(
        <div>
            <h1>My Todo:</h1>
            {
                todos.map( (mytodo,i) =>{
                    return(
                        <div key={i}>

                            <p>{mytodo}</p>

                        </div>
                    )
                })
            }
             <button onClick={newTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Todo);

// Now the Todo component will only re-render when the todos prop changes.