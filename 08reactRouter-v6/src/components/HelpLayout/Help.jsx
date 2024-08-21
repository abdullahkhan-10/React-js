import { Outlet, NavLink } from "react-router-dom";

function Help() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
      {/* The Outlet wiil display/render the content of current route selected here in (help.jsx) component on the browser. */}
    </div>
  );
}

export default Help;
