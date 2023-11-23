import React, { useEffect, useState } from 'react'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Transition from '../AnimatedLetters/Transition'
import { useLottie } from 'lottie-react'
import animation from '../../assets/Guy.json'

const HomePage = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = " Sanchit".split('');
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000)
  }, [])
  const options = {
    animationData: animation,
    loop: true,
  }
  const { View } = useLottie(options);
  return (
    <>
      <div className='container home-page overflow-hidden'>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt="" /> */}
            <AnimatedLetters letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
            <br />
            <Transition/>
          </h1>
          <Link className='flat-button' to="/contact">Contact</Link>
        </div>
      </div>

      <div className={`hidden lg:block image absolute w-96 bottom-[35%] left-[60%]  ${loading ? 'opacity-100  transition-opacity duration-500 ease-in-out' : 'opacity-0'}`}>
        {View}
      </div>
    </>
  )
}

export default HomePage