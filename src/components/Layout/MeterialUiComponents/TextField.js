import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/base';

export default function TextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.label} variant="outlined" value={props.value} onChange={(e)=>props.setValue(e.target.value)} placeholder={props.placeholder}/>
   <Button className='textfield.btn btn_cart btn_updateadress' onClick={props.handlesubmit}> Submit</Button>
    </Box>
  );
}