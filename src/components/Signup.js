import React from 'react'
import {Box, TextField, Button} from "@mui/material";
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <Box sx={{marginTop:"50px"}}>
        <h1 sx={{fontSize: "35px",marginTop:"50px",justifyContent: "center"}}>Enter Your Mobile Number</h1>
        <h4>We will send you the 4digits verification code</h4>
        <TextField sx={{width:"100%"}} id="outlined-basic" label="Mobile" variant="outlined" />
       <div> <Link to="/signin"><Button style={{width:"100%", marginTop:"30px"}} sx={{backgroundColor:"#FF6D6A"}}>Send Code</Button></Link>
       </div>
       </Box>
    </div>
  )
}

export default Signup
