import React, { useRef } from 'react'
import { Box,Button } from '@mui/material'

export const Fruits = () => {
    const fref=useRef(['apple','banana','orange',])
    const addMango = () =>{
        fref.current.push("Mango")
        console.log(fref.current)        
    }
    const toGrape = () =>{
        fref.current[1]="Grape"
        console.log(fref.current);      
    }
  return (
    <Box sx={{padding:"12px"}}>
        <Button variant='contained' onClick={addMango} sx={{marginRight:"10px"}}>Add Mango</Button>
        <Button variant='contained' onClick={toGrape}>Change to Grape</Button>
        <h1>{fref.current}</h1>
    </Box>
  )
}
