import React from 'react'
import { Task1 } from './components/Task1'
import { Typography } from '@mui/material'
import { Task2 } from './components/Task2'
import { Task3 } from './components/Task3'
import { Task4 } from './components/Task4'
import { Task5 } from './components/Task5'
import { Task6 } from './components/Task6'

export const App = () => {
  return (
    <>
      <Typography variant='h1' sx={{textAlign:"center"}}>
        Task 1
      </Typography>
      <Task1/>
      <Typography variant='h1' sx={{textAlign:"center"}}>
        Task 2
      </Typography>
      <Task2/>
      <Typography variant='h1' sx={{textAlign:"center"}}>
        Task 3
      </Typography>
      <Task3/>
      <Typography variant='h1' sx={{textAlign:"center"}}>
        Task 4
      </Typography>
      <Task4/>
      <Typography variant='h1' sx={{textAlign:"center"}}>
        Task 5
      </Typography>
      <Task5/>
      <Typography variant='h1' sx={{textAlign:"center"}}>
        Task 6
      </Typography>
      <Task6/>
    </>
  )
}
