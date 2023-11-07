import React from 'react'
import { useLottie } from 'lottie-react'
import animation from '../../assets/animation_lnr9dvk0.json'
import { useLocation } from 'react-router-dom'
const LoadingScreen = () => {
  const options = {
    animationData: animation,
    loop: true,
  }
  const location = useLocation(); // Use useLocation hook
  // Log the current path
  const { View } = useLottie(options);
  return (
    <div>

      

        <div className={'flex justify-center items-center h-screen' + location.pathname !== '/contact' && 'hidden '}>
          <div className='w-56'>
            {View}

          </div>
        </div>
      
    </div>
  )
}

export default LoadingScreen