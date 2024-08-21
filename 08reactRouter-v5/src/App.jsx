import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// nested Routes
import Products from "./components/products/Products";
import FeaturedProducts from "./components/products/FeaturedProducts"
import NewProducts from "./components/products/NewProducts"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          {/* Nested Routes */}
          <Route path="products" element={<Products />}>
             <Route path="featured" element={<FeaturedProducts/>}/>          
             <Route path="new" element={<NewProducts/>}/>          
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
