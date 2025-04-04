import React, { useState } from 'react'

export const Task4 = () => {
    const [inp,setInputValue]=useState('')
    const valueChange=(event)=>{
        setInputValue(event.target.value)
        console.log("Mike Davis")
    }
  return (
    <div>
        <input type='text' placeholder='Type Something Here' value={inp} onChange={valueChange}></input>
        <h1>{inp}</h1>
    </div>
  )
}
