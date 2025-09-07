import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  
  return (
    <BrowserRouter>
    <div className="relative z-50">
      <NavBar/>
    </div>

    <Routes>
      <Route path='/' element={
          <>
            <Hero/>
            <About/>
            
          </>
      }/>
    </Routes>


    
    
    </BrowserRouter>
    
  )
}

export default App
