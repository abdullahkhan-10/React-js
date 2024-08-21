import { NavLink } from "react-router-dom";

const Navbar = () => {
   

  return (
    <nav className="primary-nav">
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"about-us"} >About</NavLink>
      <NavLink to={"contact-us"} >Contact</NavLink>
      <NavLink to={"products"} >Products</NavLink>
    </nav>
  );
};

export default Navbar;
