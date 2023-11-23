/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import { useSwipeable } from 'react-swipeable'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])
  const navigate = useNavigate();
  const location = useLocation();

  //For swipable navigation in phones
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (location.pathname === '/') {
        navigate('/about');
      } else if (location.pathname === '/about') {
        navigate('/projects');
      } else if (location.pathname === '/projects') {
        navigate('/skills');
      } else if (location.pathname === '/skills') {
        navigate('/contact');
      }
    },
    onSwipedRight: () => {
      if (location.pathname === '/contact') {
        navigate('/skills');
      } else if (location.pathname === '/skills') {
        navigate('/projects');
      } else if (location.pathname === '/projects') {
        navigate('/about');
      } else if (location.pathname === '/about') {
        navigate('/');
      }
    },
    trackMouse: false
  });
  return (
    <>
      {isLoading ? (
        <LoadingScreen/>
        ) : (
          <body className='sm:overflow-x-hidden lg:overflow-hidden' {...handlers}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />

          </Routes>
          <Footer/>
        </body>
      )}
    </>
  )
}

export default App