
import './App.css'
import Student from './Student'

function App() {

  return (
    <>
      {/* we have created the student component once and there we can can render as many time as we want, we just need to add different props to make their content different */}
      <Student name= "Abdullah khan" age= {22}  />
      <Student name= "Kahlid khan" age= {18} />
      <Student name= "Jan khan" age= {15} />
      
    </>
  )
}

export default App
