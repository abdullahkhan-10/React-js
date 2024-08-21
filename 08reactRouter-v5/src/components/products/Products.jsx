import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <div className="inner">
        
        <div className="search">
          <input type="search" placeholder="Search Products" />
        </div>

        <nav className="secondary-nav">
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
};

export default Products;
