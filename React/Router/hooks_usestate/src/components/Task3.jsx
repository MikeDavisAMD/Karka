import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Task3 = () => {
    const [value,setValue]=useState(['Apple','Orange','Banana','Jackfruit'])
    const clickHandle =()=>{
        setValue([...value,'Kiwi','Pineapple','Pomegranate'])
    }
  return (
    <Box sx={{margin:"10px"}}>
        <ul>
            <Typography variant='h2'>
            {
                value.map((data,index)=>(
                    <li key={index}>{data}</li>
                ))
            }
            </Typography>
        </ul>
        <Button variant='contained' onClick={clickHandle}>Click</Button>    
    </Box>
  )
}
