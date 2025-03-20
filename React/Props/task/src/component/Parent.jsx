import React from 'react'
import { Child } from './Child'
export const Parent = () => {
    const arrObj = [
        {ID:10265,Name:"Mike Davis",Age:"25",Place:"Nagercoil"},
        {ID:10203,Name:"Dwayne Johnson",Age:"40",Place:"California"},
        {ID:10244,Name:"John Doe",Age:"20",Place:"Texas"},
        {ID:10200,Name:"Drew Mcintyre",Age:"35",Place:"Glassgow"},
        {ID:10299,Name:"Becky Lynch",Age:"30",Place:"Dublin"},
        {ID:10273,Name:"Io Shirai",Age:"28",Place:"Tokyo"},
    ]
  return (
    <div>
        <Child list={arrObj}/>
    </div>
  )
}
