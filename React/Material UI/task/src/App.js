import React from 'react'
import { Task1 } from './components/Task1'
import { Typography } from '@mui/material'
import { Task2 } from './components/Task2'
import { Task3 } from './components/Task3'

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
    </>
  )
}
