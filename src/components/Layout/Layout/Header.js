import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../../context/auth";
import { toast } from "react-hot-toast";
import DropdownMenu from ".././MeterialUiComponents/DropdownMenu";
const Header = () => {
  const [auth, setAuth] = useAuth();
const handleLogout =()=>{
setAuth({
  ...auth,
  user:null,
  token:''
})
localStorage.removeItem('auth')
toast.success('logout successfully')
}



  return (
    <nav>
      <li className="logo_item">
        <NavLink to="/" className=" nav_link logo_link">
          Logo
        </NavLink>
      </li>

      <div className="nav_container">
        <li className="nav_item">
          <NavLink to="/" className="nav_link">
            {" "}
            Home
          </NavLink>
        </li>

        {!auth.user ? (
          <>
            <li className="nav_item">
              <NavLink to="/register" className="nav_link">
                Register
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/login" className="nav_link">
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <>
          <DropdownMenu handleLogout={handleLogout}/>
{/* 
          <li className="nav_item">
              <NavLink  onClick={handleLogout} to="/login" className="nav_link">
                LogOut
              </NavLink>
            </li> */}
          </>
        )}
        <li className="nav_item">
          <NavLink to="/" className="nav_link">
            Cart(0)
          </NavLink>
        </li>
      </div>
    </nav>
  );
};

export default Header;
