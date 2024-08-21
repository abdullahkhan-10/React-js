import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(2);
  const [data, setData] = useState([]);


  useEffect(() => {

    async function getInfo(){
      // we add the variable count to the url, because we don't want the whole data of api at once, we want to get only that data that is store in our variable (count) through setCount function.
      let myData = await fetch(`https://fakestoreapi.com/users?limit=${count}`);
      let respone = await myData.json()

      // we will recieve the info in variable (respone) as array, and the setData function will store it in variable (data).
      setData(respone)
      // console.log(respone);
    }
    getInfo();

    document.title = `(${count}) Users online`  // to show users in the title

  }, [count]); // here we have added only one dependency, so code inside useEffecct hook will run when changes occure in this dependency.

  return (
    <>
      <Header />
      
      {/* when we click on the button , it will add one user, because we are making changes in variable (count) and we have passed this variable to the useEffect as dependency, so it will run the code inside the useeffect hook every time when we click on the button. so a side effect occure on clicking the button, this is because of dependency*/}
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>

      {
        data.map( (obj,index) =>{
          return(
            <div key={index} className="show-Data">
              <h1>{obj.name.firstname}</h1>
              <h1>{obj.name.lastname}</h1>
              <h1>{obj.password}</h1>
              <h1>{obj.email}</h1>
            </div>
          )
        })
      }
    </>
  );
}

export default App;

// For understanding purpose.
// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

// // The useEffect Hook allows you to perform side effects in your components.
// // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//   useEffect(() => {
//     window.alert("useEffect Called");
//   }, [count, count2]); // here we have added two dependencies, so code will run when changes occure in these dependencies.

//   //+++++++++++++++++++++++++++ Note. ++++++++++++++++++++++++++++++++++++
//   // 1. when there is no dependency the the code inside useEffect will run on every render, re-render or change in any state.
//   // 2. When there is empty dependency the the code will run only once when we render the app.
//   // 3. When there is a dependency then the code will only run when we make any changes in that particular dependency.
//   return (
//     <>
//       <Header />
//       <div className="btns">
//         <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
//         <button onClick={() => setCount2(count2 + 1)}>Click Here {count2}</button>
//       </div>
//     </>
//   );
// }

// export default App;
