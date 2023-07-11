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
const ForgotPassword = () =>{

 const [email, setEmail] = useState('')
 const [newpassword, setNewpassword] = useState('')
 const [answer, setAnswer] = useState('')

const navigate =useNavigate();


  const handleLogIn = async(e)=>{
e.preventDefault();
// toast.success('Registered Successfully')

try {
  const res =await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot_password`,{email,newpassword,answer});
 if(res.data.success){
  toast.success('LogedIn successfully');
 
  navigate( '/login');
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
    <Layout title={" Forgot Password -Ecommerce App  "}>
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
        id="newpassword"
        label="newpassword"
        type={'password'}
        value={newpassword}
        onChange ={(e)=>setNewpassword(e.target.value)}
        required
/>
      <TextField
        helperText=" "
        id="answer"
        label="answer"
        type={'text'}
        value={answer}
        placeholder={"Enter your answer"}
        onChange ={(e)=>setAnswer(e.target.value)}
        required
/>
    
      <button className='register_submit' onClick={handleLogIn} >
      Reset Password
      </button>
      {/* <button className='register_submit' onClick={()=>{navigate('/forgot_password')}} >
Reset Password
      </button> */}
    </Box>
    </Layout>
  )
}

export default ForgotPassword