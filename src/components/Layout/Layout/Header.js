import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../../context/auth";
import { toast } from "react-hot-toast";
import DropdownMenu from ".././MeterialUiComponents/DropdownMenu";
import SearchBar from "../MeterialUiComponents/Searchbar";
import useCategory from "../hooks/useCategory";
import CategoryDropdown from "../MeterialUiComponents/CategoryDropdown";
import { useCart } from "../../../context/cart";
import { Badge } from 'antd';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] =useCart();
  const categories =useCategory();
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
    <nav className="main_nav">
      <div className="nav_container">
        <div className="navbar_left">

      <li className="logo_item">
        <NavLink to="/" className=" nav_link logo_link">
          Logo
        </NavLink>
      </li>
        </div>
<div className="navbar_middle">
   <SearchBar className='search_bar'/>
</div>
<div className="navbar_right">

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
          {/* <NavLink to="/NavLinkcategories" className="nav_link"> */}
          <CategoryDropdown name={'Categories'} categories={categories}/>
          {/* </NavLink> */}
        </li>
        <li className="nav_item">

        <Badge count={cart?.length} showZero>
          <NavLink to="/cart" className="nav_link">
            Cart
          </NavLink>
    </Badge>
        </li>
        </div>

      </div>
    </nav>
  );
};

export default Header;
