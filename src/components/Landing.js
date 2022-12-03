import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Grid, Box} from "@mui/material";
import Cards from "./Cards";

const Landing = () => {
    const [data,setData]=useState([])
  const url="https://app.getpostman.com/run-collection/07b2a0d5654e6a42cc5f";
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
            console.log(res)
        })
    },[])
  return (
    <div>
      <div>
        <h3>Popular Ones</h3>
        <Box sx={{ paddingTop: "50px" }}>
        <Grid>
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid xs={8}>
                <Cards item={item} />
              </Grid>
            ))}
            <Grid
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></Grid>
          </Grid>
        </Grid>
      </Box>

        
      </div>
    </div>
  )
}

export default Landing
