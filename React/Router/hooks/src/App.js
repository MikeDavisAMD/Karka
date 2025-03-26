import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'

export const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}
