import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { useState, useEffect } from 'react'
import HomePage from './Components/MainPage'
import LoadingScreen from './Components/LoadingScreen'
import About from './Components/AboutPage/About'
import Skills from './Components/SkillsPage'
import Footer from './Components/FooterButton'
import Contact from './Components/ContactPage'
import Projects from './Components/Projects'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen/>
        ) : (
          <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />

          </Routes>
          <Footer/>
        </>
      )}
    </>
  )
}

export default App