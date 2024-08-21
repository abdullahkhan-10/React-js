import "./App.css";
import Header from "./Header";
import useFetch from "./useFetch";

// ++++++++++++++++++++++++++++++++++++++++ Custom Hook +++++++++++++++++++++++++++++++++++++++++++++
// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.

function App() {
  const [data] = useFetch("https://fakestoreapi.com/users?limit=10")

  return (
    <div className="App">
      <Header/>
      {
        data.map( (element, index) =>{
          return(
            <div className="show-data" key={index}>
              <h2>{element.id}</h2>
              <h1>{element.name.firstname}</h1>
              <h1>{element.name.lastname}</h1>
              <h3>{element.email}</h3>
            </div>
          )
        })
      }
    </div>
  );
}
export default App;

// +++++++++++++++ Explanation +++++++++++++   
// We have created a new file called useFetch.jsx containing a function called useFetch which contains all of the logic needed to fetch our data.
// We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook.
// Lastly, we are returning our data from our Hook.

// In App.jsx, we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from.
// Now we can reuse this custom Hook in any component to fetch data from any URL.

// in  other component we just need to pass a different url link which we required, for example we need the post data in that component, so to get post data we will pass (post) api url link in that component to the useFetch hook.
// and alll the logic is written in the useFetch component.


