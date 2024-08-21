import React, { createContext } from "react";

// step 1
const userContext = createContext()

export default userContext;

// we can create (creatContext()) and also provide the provider in same file OR in App.jsx, but for better understanding and clean code we write every step in separate files.