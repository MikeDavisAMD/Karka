import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{display:"flex",alignItems:"center",height:"80px",backgroundColor:"black",color:"white",padding:"10px"}}>
                <Grid item lg={9} md={9} sm={6} xs={12}>
                    <Box sx={{fontSize:"50px"}}>
                        <Typography variant='p' className='logo'>Website</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box sx={{display:"flex"}}>
                        <Link to="/Home" style={{marginRight:"10px",textDecoration:"none",color:"white"}}>Home</Link>
                        <Link to="/About" style={{marginRight:"10px",textDecoration:"none",color:"white"}}>About</Link>
                        <Link to="/Portfolio" style={{marginRight:"10px",textDecoration:"none",color:"white"}}>Portfolio</Link>
                        <Link to="/Contact" style={{marginRight:"10px",textDecoration:"none",color:"white"}}>Contact</Link>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    </Grid>
  )
}
