import React,{useState} from 'react'
import { Button } from '@mui/material'
import { Effect } from './components/Effect'
import { Effect2 } from './components/Effect2'
import { Timer } from './components/Timer'
import { Timer2 } from './components/Timer2'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import { Context } from './components/Context'


export const App = () => {
  const [show,setShow]=useState(true)
  return (
    <><Effect/><Effect2/>
    {/* <Timer/> */}
    {show && <Timer2/>}
    {show && <Timer/>}
    <Button variant='contained' onClick={()=>setShow(!show)}>stop</Button></>
  )
}
