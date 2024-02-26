import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Project'

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Home></Home>
       <Skills></Skills>
       <Projects></Projects>
    </>
  )
}

export default App
