import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedAddress = (props) => {
    const navigate= useNavigate()
    useEffect(()=>{
        const token= localStorage.getItem("addres")
        if (!token) {
            navigate("/address")
            alert("put address details first")
        }
    },[])
  return (
    <props.Payment/>
  )
}

export default ProtectedAddress