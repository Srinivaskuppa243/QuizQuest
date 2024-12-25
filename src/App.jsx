import React from 'react'
import QuizApp from './components/QuizApp'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/quiz' element={<QuizApp/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
