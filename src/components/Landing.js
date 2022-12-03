import React, { useEffect, useState } from 'react'
import axios from "axios";

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
      </div>
    </div>
  )
}

export default Landing
