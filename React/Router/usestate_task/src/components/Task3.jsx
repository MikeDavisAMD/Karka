import { Grid,Button,Box } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Task3 = () => {
    const navigate = useNavigate()
    const [value,setValue]=useState(5)
    const clickHandle = () => {
        const interval = setInterval(()=>{
            setValue(count => {
                if (count === 1) {
                    clearInterval(interval);
                    navigate('/Welcome');
                }
                return count-1;
            })
        },1000) 
    }
    return (
    <Grid container>
        <Grid size={{lg:12,md:12,sm:12,xs:12}}>
            <Box sx={{textAlign:"center"}}>
                <h1 style={{margin:"0px"}}>Welcome</h1>
            </Box>
        </Grid>
        <Grid size={{lg:12,md:12,sm:12,xs:12}}>
            <Box sx={{textAlign:"center"}}>
                <p>You will be redirected to the page in {value} seconds</p>
            </Box>
        </Grid>
        <Grid size={{lg:12,md:12,sm:12,xs:12}}>
            <Box sx={{textAlign:"center"}}>
                <Button variant='contained' onClick={clickHandle} sx={{margin:"0px 10px"}}>Proceed</Button>
                <Button component={Link} to={'/Welcome'} variant='contained'>Skip</Button>
            </Box>
        </Grid>
    </Grid>
  )
}
