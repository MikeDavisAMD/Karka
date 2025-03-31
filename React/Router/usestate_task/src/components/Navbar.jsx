import React from 'react'
import {Box,Button} from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box>
        <Button sx={{margin:"10px"}} variant='contained'><Link to="/" style={{textDecoration:"none",color:"white"}}>🏠</Link></Button>
        <Button sx={{margin:"10px"}} variant='contained'><Link to="/Task1" style={{textDecoration:"none",color:"white"}}>Task 1</Link></Button>
        <Button sx={{margin:"10px"}} variant='contained'><Link to="/Task2" style={{textDecoration:"none",color:"white"}}>Task 2</Link></Button>
        <Button sx={{margin:"10px"}} variant='contained'><Link to="/Task3" style={{textDecoration:"none",color:"white"}}>Task 3</Link></Button>
    </Box>
  )
}
