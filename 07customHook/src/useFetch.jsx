import { useEffect, useState } from "react";

// This is our custom Hook, all react Hook are made like this.
function useFetch(url){
    const[data, setData] = useState([])

    useEffect( () =>{
        async function apiData(){
            let call = await fetch(url);
            let res = await call.json();
            setData(res);
            // console.log(res);
        }
        apiData()
    },[url])

    return[data]  
    // why we return data, because all the information from the url are store in (data) variable by (setData) function.
};
export default useFetch;

// The useFetch logic may be needed in other components as well, so we will extract that into a custom Hook.
// Move the useFetch logic to a new file to be used as a custom Hook:

// All the react Hooks return some object, array, method and variable etc, but here from this custom Hook we return array of data from the api through fetch method. 