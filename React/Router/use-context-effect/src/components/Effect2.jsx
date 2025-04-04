import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const Effect2 = () => {
    const [count,setCount]=useState(0)
    const [Name,setName]=useState("")
    useEffect(()=>{
        console.log(`Rendered count=>${count} name=>${Name}`)
    })
  return (
    <div>
        <h1>Count: {count}</h1>
        <Button variant='contained' onClick={()=>setCount(count+1)}>Count</Button><br /><br />
        <input type="text" placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
        <h1>Name: {Name}</h1>
    </div>
  )
}
