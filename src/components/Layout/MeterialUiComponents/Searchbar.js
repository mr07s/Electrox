import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '../../../context/search';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/base';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBar() {




const[values,setValues] =useSearch()
const navigate =useNavigate();


const handleSubmit =async(e)=>{

e.preventDefault();
try {
const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/search/${values.keyword}`)
setValues({...values,results:data})
navigate("/search")

    
} catch (error) {
  console.log(error);
  toast.error("Something went wrong")


}


}




  return (
    <Box sx={{ flexGrow: 1 ,minWidth:'300px',height:'35px',display:'flex',flexDirection:'row',marginLeft:'1.2rem',marginRight:'1.2rem'}}>
      {/* <AppBar position="static"> */}
        {/* <Toolbar> */}
          <Search
          sx={{border:'1px solid black',marginRight:'1.2rem',minWidth:'90%',marginLeft:'0rem'}}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products"
              inputProps={{ 'aria-label': 'search' }}
              value={values.keyword}
              onChange={(e)=>setValues({...values, keyword:e.target.value})}
          // sx={{border:'1px solid red',marginRight:'1.2rem',width:'60%'}}
            
        />
       
          </Search>
          <Button onClick={handleSubmit}
      
        >Search</Button>
        {/* </Toolbar> */}
      {/* </AppBar> */}
    </Box>
  );
}
