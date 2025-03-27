import React, { useState } from 'react'
import {Box, Button, Typography} from '@mui/material'

export const Page = () => {
    const [value,setValue] = useState(0)
    const clickHandle = () =>{
        setValue(value+1)
        console.log(value+1)
    }
  return (
    <Box sx={{margin:"10px"}}>
        <Typography variant='h1'>{value}</Typography>
        <Button variant='contained' onClick={clickHandle}>Click</Button>
    </Box>
  )
}
