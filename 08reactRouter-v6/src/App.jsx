import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Layout
import Layout from './Layout'

// pages
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Help from './components/HelpLayout/Help'
import Error from './components/pages/Error'
import CareerPage from './components/careerLayout/CareerPage'
import OrderSummary from "./components/OrderSummary";

// nested pages
import Faq from './components/HelpLayout/Faq'
import Contact from './components/HelpLayout/Contact'
import Careers, {careersLoader} from './components/careerLayout/Careers'
// import Details, {careerDetailsLoader} from './components/careerLayout/Details'

// We will wrap all the component in Layout element in App.jsx, so Layout will be root element for all the compnent/routes,
const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      
       {/* video 3 */}
      <Route index element={<Home />} />
      <Route path="about-us" element={<About />} />
      
      {/* video 4 */}
      {/* Nested Routes  */}
      <Route path="help" element={<Help />}>
         <Route index element={<Faq/>}/>
         <Route path ="faq" element={<Faq/>}/>
         <Route path ="contact" element={<Contact/>}/>
      </Route>

      {/* video 5 */}
       {/* when the above Routes are not found then render this Route. */}
      <Route path='*' element={<Error/>}/>

      {/* video 6 */}
      {/* when we click on the link which is mention in (Header.jsx), it will render the (CareerPage) component, which will then render (Careers) component and will call the careersLoader function, and then every thing will happen in (Careers) component  */}
      <Route path='career-page' element={<CareerPage/>}>
        <Route 
          path="career"
          element={<Careers/>}
          loader={careersLoader}
        />

        {/* Details page */}
        {/* video 7 */}
        {/* <Route
          path=':id'    // the colon (:) mean that this path wil be changable.
          element={<Details/>}
          loader={careerDetailsLoader}
        /> */}
      </Route>

      {/* Learn (useNavigate) from (codeEvolution) channel to navigagte Programmatically to the route, its button is in (Home.jsx) */}
      <Route path="order-summary" element={<OrderSummary/>}/>
       
    </Route>
  )
)

function App() {
  return (
    <div className="app">
      <RouterProvider router={myRouter}/>
    </div>

  );
}

export default App;
