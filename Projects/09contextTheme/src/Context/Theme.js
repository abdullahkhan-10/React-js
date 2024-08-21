import { createContext, useContext } from "react";

// step 1. Creat context
// we pass the object the creatContex
const ThemeContext = createContext( {
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () =>{}
})

// step 2. Provide the provider
export const ThemeProvider = ThemeContext.Provider


// step 3.  we can also make custom useContext Hook as well

export default function useTheme(){
    return useContext(ThemeContext)
};

// now useTheme is our Custome hook, we can access the object that we have passed to ThemContext.
