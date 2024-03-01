import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Project'
import ContactMeSection from './component/contactme'
import Sidebar from './component/sidebar'

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
