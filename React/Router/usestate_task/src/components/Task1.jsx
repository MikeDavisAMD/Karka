import React, { useState } from 'react'
import { Box, Button } from '@mui/material'

export const Task1 = () => {
    const [inp,setinp]=useState('')
    const [out,setOut]=useState([])
    const changeHandle=(event)=>{
        setinp(event.target.value)
    }
    const clickHandle=()=>{
        setOut([...out,inp])
    }
  return (
    <Box sx={{margin:"12px"}}>
        <input type="text" placeholder='Type your text here' value={inp} onChange={changeHandle} style={{marginRight:"10px",padding:"10px"}}/>
        <Button variant='contained' onClick={clickHandle}>Add</Button>
        <ol>
            {
                out.map(data=>(
                    <li>{data}</li>
                ))
            }
        </ol>
    </Box>
  )
}
