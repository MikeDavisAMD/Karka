import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Task5 = () => {
    const [inp,setInp]=useState('')
    const [value,setValue]=useState('')
    const changeHandle =(event)=>{
        setInp(event.target.value)
    } 
    const clickHandle =()=>{
        setValue(inp)
    }
  return (
    <div>
        <input type="text" placeholder='Type Something here' onChange={changeHandle} value={inp} style={{padding:"11px"}}/>
        <Button variant='contained' onClick={clickHandle}>Submit</Button>
        <Typography variant='h1'>{value}</Typography>
    </div>
  )
}
