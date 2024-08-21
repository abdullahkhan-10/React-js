import { useState } from "react";
import userContext from "./UserContext";

// step 2
const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;


// the  children mean that all the components that are in App.jsx inside UserContextProvider function will be receve here. in simple word we pass those components to the UserContextProvider function as parameters.