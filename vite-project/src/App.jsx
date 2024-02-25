import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Home></Home>
       <Skills></Skills>
    </>
  )
}

export default App
