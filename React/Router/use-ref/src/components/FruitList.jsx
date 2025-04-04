import React, { useRef, useState } from 'react'
import { Box,Button } from '@mui/material'

export const FruitList = () => {
    const [value,setValue]=useState(0)
    const ref = useRef(['Apple','Banana','Orange'])
    const addMango =()=>{
        ref.current.push("Mango")
        setValue(value+1)
    }
    const toGrapes =()=>{
        ref.current[1]="Grapes"
        setValue(value+1)
    }
  return (
    <Box sx={{padding:"12px"}}>
        <ol>
            {ref.current.map((data,index) => (
                <li key={index}>{data}</li>
            ))}
        </ol>
        <Button variant='contained' onClick={addMango} sx={{marginRight:"10px"}}>Add Mango</Button>
        <Button variant='contained' onClick={toGrapes}>Change to Grape</Button>
    </Box>
  )
}