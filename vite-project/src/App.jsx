import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Project'
import ContactMeSection from './component/contactme'
import Projectspage from './component/pages/Project'

function App() {

  return (
    <>
          <Projectspage></Projectspage>
       {/* <Navbar></Navbar>
       <Home></Home>
       <Skills></Skills>
       <Projects></Projects>
       <ContactMeSection></ContactMeSection> */}
    </>
  )
}

export default App
