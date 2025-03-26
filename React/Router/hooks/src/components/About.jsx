import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate()
    const Page = () =>{
        navigate("/Home")
    }
  return (
    <Button variant='contained' onClick={Page}>Home</Button>
  )
}
