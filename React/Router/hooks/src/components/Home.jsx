import React from 'react'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    const Page = () =>{
        navigate("/About")
    }
  return (
    <Button variant='contained' onClick={Page}>About</Button>
  )
}
