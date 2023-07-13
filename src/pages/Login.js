import *  as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Layout from '../components/Layout/Layout/Layout';
import './Register.css'
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'
import {useAuth} from '../context/auth'
const Login = () =>{

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [auth,setAuth] =useAuth();

const navigate =useNavigate();
const location =useLocation();

  const handleLogIn = async(e)=>{
e.preventDefault();
// toast.success('Registered Successfully')

try {
  const res =await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
 if(res.data.success){
  toast.success('LogedIn successfully');
  setAuth({
    ...auth,
    user:res.data.user,
    token:res.data.token
  })
  localStorage.setItem('auth',JSON.stringify(res.data))
  navigate(location.state|| '/');
  console.log('success')
 }
 else{
  
  toast.error(res.data.message)
  console.log(res.data.message)
   
}
} 
catch (error) {
  console.log(error);
  toast.error(error.message)
}

 }


  return (
    <Layout title={"Login -Ecommerce App  "}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        height:'100vh',
        // border:'1px solid black',
        alignItems:'center',
        justifyContent:'center',
        // boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        '& > :not(style)': { m: 1 },
      }}
     
    >
        <h3>
LogIn
        </h3>
  
        <TextField
          helperText=" "
          id="email"
          label="Email"
          type={'email'}
          value={email}
        onChange ={(e)=>setEmail(e.target.value)}
        required
        />
      <TextField
        helperText=" "
        id="password"
        label="Password"
        type={'password'}
        value={password}
        onChange ={(e)=>setPassword(e.target.value)}
        required
/>
    
      <button className='btn register_submit' onClick={handleLogIn} >
LogIn
      </button>
      <button className=' btn register_submit' onClick={()=>{navigate('/forgot_password')}} >
Forgot Password
      </button>
    </Box>
    </Layout>
  );
}
export default Login