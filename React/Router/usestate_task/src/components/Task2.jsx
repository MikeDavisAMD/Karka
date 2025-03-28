import React, { useState } from 'react'
import { Button,Box } from '@mui/material'

export const Task2 = () => {
    const [value,setValue]=useState({Name:"",Place:""})
    const [name,setName]=useState('')
    const [place,setPlace]=useState('')
    const nameChangeHandle=(event)=>{
        setName(event.target.value)
    }
    const placeChangeHandle=(event)=>{
        setPlace(event.target.value)
    }
    const clickHandle=()=>{
        setValue({Name:name,Place:place})
    }
  return (
    <Box sx={{margin:"12px"}}>
        <input type="text" placeholder='Name' value={name} onChange={nameChangeHandle} style={{padding:"10px"}}/>
        <input type="text" placeholder='Place' value={place} onChange={placeChangeHandle} style={{marginLeft:"10px",marginRight:"10px",padding:"10px"}}/>
        <Button variant='contained' onClick={clickHandle}>Add</Button>
        <h1>{`Name: ${value.Name} | Place: ${value.Place}`}</h1>
    </Box>
  )
}
