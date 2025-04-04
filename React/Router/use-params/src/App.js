import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { About } from './components/About'

export const App = () => {
  return (
    <Router>
      <h1>Welcome</h1>
      <Routes>
        <Route path='/About/:id' element={<About/>}/>
      </Routes>
    </Router>
  )
}
