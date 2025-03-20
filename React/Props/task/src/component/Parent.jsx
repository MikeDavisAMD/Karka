import React from 'react'
import { Child } from './Child'
export const Parent = () => {
    const arrObj = [
        {Name:"Mike Davis",Age:"25",Place:"Nagercoil"},
        {Name:"Hunner Micheal",Age:"40",Place:"California"},
        {Name:"John Doe",Age:"20",Place:"Texas"},
        {Name:"Drew Mcintyre",Age:"35",Place:"Glassgow"},
        {Name:"Becky Lynch",Age:"30",Place:"Dublin"},
        {Name:"Io Shirai",Age:"28",Place:"Tokyo"},
    ]
  return (
    <div>
        <Child list={arrObj}/>
    </div>
  )
}
