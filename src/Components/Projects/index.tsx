import { useEffect, useState } from 'react'
import PageWrapper from '../Layout'
import data from './data'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (

            <PageWrapper>
                <div className='mx-32 mt-10 mb-10'>
                    <h1 className='font-display text-4xl font-bold mb-4 flex'>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={"The Project Section".split("")}
                            idx={8} />
                    </h1>
                    <p className='text-[#ffd700]'>Some of my highlighted projects are:</p>
                </div>

                <div className='flex mx-32 space-x-9'>
                    {
                        data.map(project => {
                            return (
                                <Link to={project.link}>
                                    <div className='='><div className="card w-96 h-96 bg-base-100 shadow-xl">
                                        <figure><img className='object-fill' src={project.img} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-[#ffd700]">{project.name}</h2>
                                            <p>{project.description}</p>
                                            <div className="card-actions">
                                                <p className=" py-4 font-bold">
                                                    Frameworks and Languages Used:
                                                </p>
                                                <div className="flex space-x-5">
                                                    {project.frameworks.map((framework: string) => {
                                                        return <span className="w-10 "><img src={framework} alt="" /></span>;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div></div>
                                </Link>
                            )
                        })
                    }
                </div>

            </PageWrapper>
        )
}

export default Projects