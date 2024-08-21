import userContext from "../Context/UserContext";

import { useContext } from "react";

function Profile(){
    // Because we want to get the data, and we have all the data about the person in const (user).
    const {user} = useContext(userContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.userName}</div>
}

export default Profile;