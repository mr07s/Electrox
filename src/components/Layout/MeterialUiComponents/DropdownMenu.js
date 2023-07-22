import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../../../context/auth';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import './DropdownMenu.css'
export default function DropdownMenu({handleLogout}) {
    const [auth, setAuth] = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar  id='drop_down_avatar' sx={{ width: 32, height: 32 ,backgroundColor:'white',color:'black',border:'2px solid black' }}>{auth?.user?.name?.charAt(0)}</Avatar>
          </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
     
          <NavLink to={`/dashboard/${auth?.user?.role === 1? "admin ": "user"}`} className=" nav_link logo_link" sx={{height:'2px'}}>
        <MenuItem onClick={handleClose}>
            Dashboard
        </MenuItem>
        </NavLink>
     
        <MenuItem onClick={handleClose}>My account</MenuItem>
<NavLink to="/login"  className=" nav_link logo_link">
        <MenuItem onClick={handleLogout}>Logout</MenuItem>

</NavLink>
      </Menu>
    </div>
  );
}