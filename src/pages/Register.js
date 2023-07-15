import *  as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Layout from '../components/Layout/Layout/Layout';
import './Register.css'
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Register = () =>{
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [address, setAddress] = useState('')
 const [phone, setPhone] = useState('')
 const [answer, setAnswer] = useState('')

const navigate =useNavigate();


  const handleSubmit = async(e)=>{
e.preventDefault();
// toast.success('Registered Successfully')

try {
  const res =await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer});
 if(res.data.success){
  toast.success('Registered successfully');
  navigate('/login');
  console.log('success')
 }
 else{
  
  toast.error(res.data.message)
  console.log(res.data.message)
   
}
} 
catch (error) {
  console.log(error);
  toast.error('Something went wrong')
}

 }


  return (
    <Layout title={"Register -Ecommerce App  "}>
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
Register
        </h3>
      <TextField
        // helperText="Please enter your name"
        id="name"
        label="Name"
        value={name}
        onChange ={(e)=>setName(e.target.value)}
        required
      />
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
      <TextField
        helperText=" "
        id="adress"
        label="Address"
        type={'text'}
        value={address}
        onChange ={(e)=>setAddress(e.target.value)}
        required
      />
      <TextField
        helperText=" "
        id="phone"
        label="Phone"
        type={'number'}
        value={phone}
        onChange ={(e)=>setPhone(e.target.value)}
        required
      />
      <TextField
        helperText=" "
        id="answer"
        label="Answer"
        type={'text'}
        value={answer}
        onChange ={(e)=>setAnswer(e.target.value)}
        placeholder ='What is your answer'
        required
      />
      <button className='btn register_submit' onClick={handleSubmit} >
Submit
      </button>
    </Box>
    </Layout>
  );
}
export default Register