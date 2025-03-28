import React from 'react'
import { Header } from './components/Header'
import { One } from './components/One'
import { Two } from './components/Two'
import { Three } from './components/Three'
import { Four } from './components/Four'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>}/>
          <Route path="/One" element={<One/>}/>
          <Route path="/Two" element={<Two/>}/>
          <Route path="/Three" element={<Three/>}/>
          <Route path="/Four" element={<Four/>}/>
        </Routes>      
      </BrowserRouter>
    </>
  )
}
