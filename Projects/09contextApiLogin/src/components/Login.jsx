import { useState, useContext } from "react";

import userContext from "../Context/UserContext";

function Login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    function handleSubmit(e){
        e.preventDefault();
        setUser({userName, password})  
        // the (setUser) method will store the data in (user) const in (UserContextProvider.jsx) file which was initially null
    }

    
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={ (event) => setUsername(event.target.value)}
        placeholder="username"
      />{" "}

      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
