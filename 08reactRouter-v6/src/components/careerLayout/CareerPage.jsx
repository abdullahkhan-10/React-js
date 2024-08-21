import { Link, Outlet } from "react-router-dom"

function CareerPage(){
    return (
        <div className="careers-layout">
          <h2>Careers</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

          <Link to="career">All Users</Link>
          
          <Outlet />
          {/* Outlet mean to display the content of (Careers) component here */}
        </div>
    )
}
export default CareerPage;