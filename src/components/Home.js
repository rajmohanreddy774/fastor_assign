import React from 'react'
import "./Home.css";
import {Box} from "@mui/material";
import Header from './Header';
// import Signup from './Signup';
// import Signin from './Signin';
import Landing from './Landing';


const Home = () => {
  return (
     <Box className="container">
     <Header/>
     <Box className='box1' sx={{padding:"120px"}}>
       <Landing/>
     </Box>
   </Box>
  )
}

export default Home
