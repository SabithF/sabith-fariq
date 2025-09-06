import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  
  return (
    <BrowserRouter>
    <div className="relative z-10">
      <NavBar/>
    </div>

    <Routes>
      <Route path='/' element={
          <>
            <Hero/>
            <Hero/>
          </>
      }/>
    </Routes>


    
    
    </BrowserRouter>
    
  )
}

export default App
