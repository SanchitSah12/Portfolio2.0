import React from 'react'
import {TypeAnimation} from 'react-type-animation'
const Transition = () => {
    return (
        <div className='text-lg font-display text-gray-500 mt-4'>
            <TypeAnimation
                sequence={[
                    2000,
                    // Same substring at the start will only be typed once, initially
                    'I am a Web Developer',
                    1000,
                    'I am a Final Year Student',
                    1000,
                    'I am a ML Enthusiast',
                    1000,
                    'I am a Technology Enthusiast',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
        </div>
    )
}

export default Transition