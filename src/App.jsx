import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tech from './components/Tech'
import Experience from './components/Experience'

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
            <Services/>
            <Tech/>
            <Experience/>
            
          </>
      }/>
    </Routes>


    
    
    </BrowserRouter>
    
  )
}

export default App
