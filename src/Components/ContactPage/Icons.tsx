import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const Icons = () => {
  const IconArray = [
    {icon: faGithub, link: "https://github.com/SanchitSah12"},
    {icon: faLinkedin, link: "https://www.linkedin.com/in/sanchit-sah-91aa26169/"},
    {icon: faCode, link: "https://leetcode.com/SanchitSah/"},
    {icon: faHackerrank, link: "https://www.hackerrank.com/profile/sahsanchit"}
  ];
  
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-10 mt-5 border border-[#ffd700] w-32 space-y-8  rounded-lg' >
        {IconArray.map(icon => (
          <a href={icon.link} className='hover:text-[#ffd700]' key={icon.icon.iconName}>
            <FontAwesomeIcon icon={icon.icon} size='4x' />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Icons