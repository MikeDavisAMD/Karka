import React, { useRef } from 'react'
import { Box, Button } from '@mui/material'

export const Count = () => {
    const inref = useRef(null)
    const clickHandle = () => {
        inref.current+=1
        console.log(`clicked ${inref.current} times`)
    }
    return (
        <Box sx={{padding:"12px"}}>
            <h1>{inref.current}</h1>
            <Button variant='contained' onClick={clickHandle}>Click</Button>
        </Box>
  )
}
