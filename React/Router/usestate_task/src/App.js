import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Task1 } from './components/Task1'
import { Task2 } from './components/Task2'
import { Task3 } from './components/Task3'
import { Welcome } from './components/Welcome'

export const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Task1' element={<Task1/>}/>
        <Route path='/Task2' element={<Task2/>}/>
        <Route path='/Task3' element={<Task3/>}/>
        <Route path='/Welcome' element={<Welcome/>}/>
      </Routes>
    </Router>
  )
}
