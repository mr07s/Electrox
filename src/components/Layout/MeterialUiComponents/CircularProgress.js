import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react"
import { useNavigate ,useLocation} from 'react-router-dom';



export default function CircularProgressAnimation() {
const [count,setCount] =useState(5);
const navigate =useNavigate();
const location =useLocation();

useEffect (()=>{

const Intervel =setInterval(() => {
    setCount((prevValue) => --prevValue)
}, 1000);
count === 0 && navigate('/login',{
  state:location.pathname
})

return ()=>clearInterval(Intervel)

},[count,navigate,location])









  return (
    <Box sx={{ display: 'flex',height:'100vh',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'1px solid black' }}>
        <h1>
        LogIn required !
        </h1>
        <h1 >
           Redirecting you to the login page in 
        </h1>
          <h1>

          {count} 
          </h1>
      <CircularProgress  sx={{marginTop:'3rem'}} />
    </Box>
  );
}