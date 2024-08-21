import './App.css'

import {RouterProvider,  createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Github, {githubInfoLoader} from './components/Github'

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about-us' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>

      <Route
        path='github'
        element={<Github/>}
        loader={githubInfoLoader}
      />

    </Route>
  )
)
function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
