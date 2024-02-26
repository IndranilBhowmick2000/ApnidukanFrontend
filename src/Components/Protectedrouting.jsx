import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protectedrouting = (props) => {
    const navigate= useNavigate()
    useEffect(()=>{
        const token= localStorage.getItem("user")
        if (!token) {
            navigate("/")
            alert("login first")
        }
    },[])
  return (
    <props.Orders/>
  )
}

export default Protectedrouting