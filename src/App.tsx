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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLeft,setShowLeft] = useState(false);
  const [showRight,setShowRight] = useState(false);


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
    onSwiping:(options)=>{
      if(options.dir === 'Left'){
        setShowLeft(true);
        setShowRight(false);
      }
      else{
        setShowLeft(false);
        setShowRight(true);
      }
    },
    onSwiped: () => {
      setShowLeft(false);
      setShowRight(false);
    },
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
      setShowLeft(false);
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
      setShowRight(false);
    },
    swipeDuration:250,
    
    trackMouse: false
  });

  return (
    <>
      {isLoading ? (
        <LoadingScreen/>
        ) : (
          <div className='overflow-hidden' {...handlers}>
          <Navbar />
          <div className='fixed z-10'>
            {showLeft && <div className='absolute  top-[300px] left-32'>
            <FontAwesomeIcon size='3x' className='animate-ping text-[#ffd700] w-96' icon={faArrowRight} /></div>}
            {showRight && <div className='absolute top-[300px] left-[5%] rotate-180'>
            <FontAwesomeIcon size='3x' className=' animate-ping text-[#ffd700]' icon={faArrowRight} /></div>}
            {/* {View} */}
          </div>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />

          </Routes>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default App