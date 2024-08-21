import { useParams } from "react-router-dom"

// Params are key-value pairs that are passed from a route to a component. They are useful for passing data that is specific to a particular route, such as an ID or a name.
function User(){
    //1.  The hook return an object of key value pair (myParams)
    const myParams = useParams()
    // This (myParams) object contain key value pair of the dynamic param from the current url.
    // the parameter we want to access is (id), lets store it in constant.
    const userId = myParams.id
    // Note. The (id) on the (myParams) object correspond to the dynamic segment we have specified in the Route (User) in (App.jsx).

    //2.  we can directly destractured the id as well, but keep in mind to write the same property as we have specified in the Route which is (user/:id), so we will write the id here.
    // const {id} = useParams()

    return(
        <div className='bg-gray-600 text-white text-3xl p-4'>User: {userId}</div>

        // for the secod method.
        // <div className='bg-gray-600 text-white text-3xl p-4'>User: {id}</div>
    )
}

export default User;