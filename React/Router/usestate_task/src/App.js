import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Task1 } from './components/Task1'
import { Task2 } from './components/Task2'

export const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Task1' element={<Task1/>}/>
        <Route path='/Task2' element={<Task2/>}/>
      </Routes>
    </Router>
  )
}
