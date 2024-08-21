
import './App.css'
import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import movieData from './components/Data.json'

function App() {
  return (
    <div className="myApp">
      <Header />
      <div className="main">
        {
          // here allMovies mean the array, and the parameter obj means all the objects inside array in movie.json file, and index refer to the unique key of each object, here the unique key of each object is their index number.
          // Map() method will help us render our component Movie.js a number of time that we have the objects in array.
          movieData.map( (obj) =>{
            return(
              <Movies 
               image = {obj.Poster}
               moTitle = {obj.Title}
               moYear = {obj.Year}
              />
            )
             // we will send this data with the help of name, year and img attribute as props to Movie.js file to display all movies on the browserc
          })
        } 
      </div>
      <Footer/>
    </div>
  )
}

export default App
