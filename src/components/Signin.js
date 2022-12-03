import React from "react";
import "./Signin.css";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Signin = () => {

   
  return (
    <div>
      <Box sx={{justifyContent:"left"}}>
        <ArrowBackIosIcon />
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <h1
          sx={{ fontSize: "35px", marginTop: "50px", justifyContent: "center" }}
        >
          OTP Verification
        </h1>
        <h4>Enter the verification code we just sent on your mobile Number</h4>
        <input style={{width:"100%"}} id="partitioned" type="text" maxlength="5" />
        <div>
          <Button
            style={{  marginTop: "30px", width:"100%" }}
            sx={{ backgroundColor: "#FF6D6A" }}  
            path="/signin" 
          >
            Submit
          </Button>
        </div>
        <div>
            <h4>Din't recieve the code? Resend</h4>
        </div>
      </Box>
    </div>
  );
};

export default Signin;
