import React, { useState } from 'react'
import { Box,Typography,Button } from '@mui/material'

export const Task2 = () => {
    const [value,setValue]=useState('Change Text')
    const clickHandle = () =>{
        setValue('Mike Davis')
    }
  return (
    <Box sx={{margin:"10px"}}>
        <Typography variant='h1'>{value}</Typography>
        <Button variant='contained' onClick={clickHandle}>Reveal</Button>
    </Box>
  )
}
