import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [count,setCount]=useState(5)
    useEffect(()=>{
        console.log("Timer Started....")
        const interval = setInterval(()=>{
            console.log("Timer Running....")
            setCount(count => {
                if(count <= 0){
                    clearInterval(interval)
                    console.log("Cleanup: Timer Stopped!!!")
                    return count
                }
                console.log("Timer Running....")
                return count-1
            })
        },1000)
        return () => {
            clearInterval(interval)
            console.log("Cleanup: Timer Stopped!!!")
        }
    },[count])
  return (
    <h1>{count}</h1>
  )
}
