import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
       {/* Outlet mean display/render the selected Routes between Header and Footer, that are wrap inside Layout Route  */}
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;

//Note.
// we can do the operation of layout in (App.jsx), and in (App.jsx) opration in (index.jsx).
