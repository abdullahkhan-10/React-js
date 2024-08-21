import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import CompA from './components/CompA'

// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

// context api is used to pass data directly from parent component to great grand child compoonent/ last child component, decieving the intermediate child components.

// 1. first we creat context
export const myData = createContext()

// we can also create another context as well 
export const personDetails = createContext()

function App() {
  const [name, setName] = useState("Abdullah khan")
  const [info,setInfo] = useState({city: "Peshawar", age: 21})
  return (
    <>
    {/* Next we'll use the Context Provider to wrap the tree of components that need the state Context. */}
    {/* 2. we will use provider to make the data accessable to get in child component. */} 
    <myData.Provider value={name} >
      <personDetails.Provider value={info}>
        <Header/>
        <CompA/>
      </personDetails.Provider >
    </myData.Provider>
    </>
    // we wrap  all the components inside thoes two context, which mean that we can access these context in any component.
  )
}

export default App;
