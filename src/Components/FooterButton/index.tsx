import React, { useEffect, useState } from 'react'
import animation from '../../assets/CYVichzLiG.json'
import { useLottie } from 'lottie-react';
import { useLocation, useNavigate } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
const Footer = () => {
    const options = {
        animationData: animation,
        loop: true,
    }

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const navigate = useNavigate();
    const location = useLocation();
    const { View } = useLottie(options);

    const handleButtonClick = () => {
        if (location.pathname === '/') {
            navigate('/about');
        } else if (location.pathname === '/about') {
            navigate('/projects');
        } else if (location.pathname === '/projects') {
            navigate('/skills');
        } else if (location.pathname === '/skills') {
            navigate('/contact');
        }else if (location.pathname === '/contact') {
            navigate('/');
        }
    };
    return (

        <div className=' invisible  rounded-full top-[83%] left-[85%]  absolute lg:visible' >
            <button className='flex  justify-center items-center' onClick={handleButtonClick}>
                <p className='text-xs text-[#ffd700]'>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={"Next Page".split("")}
                        idx={12} />
                </p>
                <div className='w-20'>
                    {View}
                </div>
            </button>
        </div >
    )
}

export default Footer