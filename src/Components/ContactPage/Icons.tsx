import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Icons = () => {
  const IconArray = [
    { icon: faGithub, link: "https://github.com/SanchitSah12" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/sanchit-sah-91aa26169/" },
    { icon: faCode, link: "https://leetcode.com/SanchitSah/" },
    { icon: faHackerrank, link: "https://www.hackerrank.com/profile/sahsanchit" }
  ];

  return (
    <div>
      <div className='sm:p-5 flex lg:flex-col justify-center items-center  lg:py-10 mt-5 lg:border border-[#ffd700] lg:w-32 lg:space-y-8  rounded-lg' >
        {IconArray.map(icon => (
          <a href={icon.link} className='hover:text-[#ffd700] px-5 lg:px-0' key={icon.icon.iconName}>
            <FontAwesomeIcon icon={icon.icon} className='text-[30px] lg:text-[67px]' ></FontAwesomeIcon>

          </a>
        ))}
      </div>
    </div>
  )
}

export default Icons