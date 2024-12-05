import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Event from './page/Event'
import About from './page/About'
import Library from './page/Library'
import Admission from './page/Admission'
import Footer from './components/Footer'


function App() {

  return (
   <>
   <HashRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/event' element={<Event/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/library' element={<Library/>}></Route>
    <Route path='/admissions' element={<Admission/>}></Route>

   </Routes>
   <Footer/>
   </HashRouter>
   </>
  )
}

export default App
