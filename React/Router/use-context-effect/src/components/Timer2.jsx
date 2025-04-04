import React, { useEffect, useState} from 'react'
import { Typography } from '@mui/material'

export const Timer2 = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Timer Running....")
            setCount(count+1)
        },1000)
        return ()=>{
            clearInterval(interval)
            console.log("Timer Stopped!!!")
        }
    },[count])
  return (
    <div>
        <h1>Timer Started...</h1>
        <Typography variant='h1'>
            {count}
        </Typography>
    </div>
  )
}
