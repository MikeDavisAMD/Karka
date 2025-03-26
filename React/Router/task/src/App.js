import React from 'react'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<h1> </h1>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}
