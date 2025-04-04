import React, { useRef, useState } from 'react'
import { Box } from '@mui/material'

export const Count2 = () => {
    const [value,setValue]=useState('')
    const prev=useRef('')
    const changeHandle = (event) => {
        prev.current=value
        setValue(event.target.value)
    }
  return (
    <Box sx={{padding:"12px"}}>
        <input value={value} onChange={changeHandle} type="text" placeholder='type here' style={{padding:"10px"}}/>
        <h1>Current: {value}</h1>
        <h1>Previous: {prev.current}</h1>
    </Box>
  )
}
