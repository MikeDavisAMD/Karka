import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add" />

export const Task = () => {
    const [value,setValue]=useState(0)
    const increment = () =>{
        setValue(value+1)
    }
    const decrement =()=>{
        setValue(value-1)
    }
  return (
    <Grid container>
        <Box sx={{display:"flex",margin:"10px"}}>
            <Button variant='contained' onClick={decrement}>-</Button>
            <Typography variant='h1'>{value}</Typography>
            <Button variant='contained' onClick={increment}>+</Button>
        </Box>
    </Grid>
  )
}
