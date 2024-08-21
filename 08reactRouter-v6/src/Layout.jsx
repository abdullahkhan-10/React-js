import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;

// Explanation.
// The Layout component has <Outlet> and elements.
// The <Outlet> renders the current route selected.

// We will wrap all the component in Layout element in App.jsx, so Layout will be root element for all the compnent/routes,
// The Outlet mean that Layout will display all the content of all the routes/component Between Header and Footer in the browser/DOM.

// the Layout component is render in App component Through router attribute of (RouterProvider) element.