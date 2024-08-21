
import './App.css'
import {Header, Footer} from "./components/index"
import {Outlet} from "react-router-dom"
import { useState, useEffect } from 'react'
import myAuthService from './appWrite/myAuth'
import { login,logOut } from './reduxToolkit/authSlice'
import {useDispatch} from "react-redux"

function App() {
  // to test the variable, if it is accessable or not on frontend. This process is for vite and for create-react the process is different. 
  // console.log(import.meta.env.VITE_MYAPPWRITE_URL);

  const [loading, setLoading] = useState(true)   // mean the app is loading and data has not been recieve yet. 
  const dispatch = useDispatch()

  // we use useEffect to communicate with server or api. 
  // whenever thw app get load and through useEffect asked the service that either loged in or not.
  useEffect( () =>{
    // if we have recieve the data from backend then send to login method to show on frontend
    myAuthService.currentUser()
    .then( (response) =>{
      if(response){                    
        dispatch(login({response}))
      }else{
        dispatch(logOut())
      }
    })
    .finally( () =>{
      setLoading(false)  // once we have recieved our data then make the app loading stop and show data on app
    })
  }, [])

  // as return is conditional rendering in react, we can also write like below.
  return   !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        {/* <main>
          <Outlet />
        </main> */}
        <Footer />
      </div>
    </div>
    
  ) : null
  // it mean if there is no loading (false) show the code , and there if there is loading (true) show null.
}

export default App
