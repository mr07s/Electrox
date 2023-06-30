import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav>

<li className='logo_item'>
  <NavLink to='/' className=' nav_link logo_link'>Logo</NavLink>

</li>




      <div className="nav_container">



<li className='nav_item'>
  <NavLink to='/' className='nav_link'>    Home</NavLink>
</li>

<li className='nav_item'>
  <NavLink to='/about' className='nav_link'>Register</NavLink>
</li>
<li className='nav_item'>
  <NavLink to='/' className='nav_link'>Login</NavLink>
</li>
<li className='nav_item'>
  <NavLink to='/' className='nav_link'>Cart(0)</NavLink>
</li>
      </div>
    </nav>
  )
}

export default Header