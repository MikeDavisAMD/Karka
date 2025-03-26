import React from 'react'
import { Main } from './components/Main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Task1} from './components/Task1.jsx'
import {Task2} from './components/Task2.jsx'
import {Task3} from './components/Task3.jsx'
import {Task4} from './components/Task4.jsx'
import {Task5} from './components/Task5.jsx'
import {Task6} from './components/Task6.jsx'

export const App = () => {
  return (
    <BrowserRouter>
      <Main/>
      <Routes>
        <Route path='/' element={<h1>Welcome</h1>}/>
        <Route path='/Task1' element={<Task1/>}/>
        <Route path='/Task2' element={<Task2/>}/>
        <Route path='/Task3' element={<Task3/>}/>
        <Route path='/Task4' element={<Task4/>}/>
        <Route path='/Task5' element={<Task5/>}/>
        <Route path='/Task6' element={<Task6/>}/>
      </Routes>
    </BrowserRouter>
  )
}
