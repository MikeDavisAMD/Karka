import React from 'react'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}
