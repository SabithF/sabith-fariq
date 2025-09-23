import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tech from './components/Tech'
import Experience from './components/Experience'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <BrowserRouter>
    <div className="relative z-50">
      <NavBar/>
    </div>

    <Routes>
      <Route path='/' element={
          <>
           <section id="hero" className="scroll-mt-28"><Hero/></section> 
           <section id="about" className="scroll-mt-28"> <About/></section> 
           <section className="scroll-mt-28"> <Services/></section> 
           <section className="scroll-mt-28"> <Tech/></section> 
           <section id="work" className="scroll-mt-28"><Experience/></section> 
           <section id="projects" className="scroll-mt-28"><Project/></section> 
           <section id="contact" className="scroll-mt-28"> <Contact/></section> 
           
           
           

            
            
            <Footer />
            
          </>
      }/>
    </Routes>


    
    
    </BrowserRouter>
    
  )
}

export default App
