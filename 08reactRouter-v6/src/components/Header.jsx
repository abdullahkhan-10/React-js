import {NavLink} from "react-router-dom";

// we will use NavLink instead of Link, because with help of NavLink we can add css, it has class attribute by default. and we will use Link there where we don't need css.  
function Header(){
    return(
        <div className="header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about-us'>About</NavLink>  
                <NavLink to='help'>Help</NavLink>
                <NavLink to='career-page'>Career</NavLink>
            </nav>
        </div>
    )
}
export default Header;