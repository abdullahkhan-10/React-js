import Pathan from "./Pathan"

function App() {
  // we will write all the javascript here in the function.
  const districtName = "Khyber"

  // In return we will only write html, the javascript will be written outside return, and we will only inject javascript variable inside html.
  // also if need to write javascript inside return, then we need to put javascript in curly brackets.
  return (
    <div>
      <h1>Abdullah khan</h1>
      {/* curly bracket is used to inject javascript variable in html  */}
      <p>I am from district {districtName}.</p>   

      <Pathan/>
    </div>
  )
}

export default App;
