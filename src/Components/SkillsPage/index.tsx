import React, { useEffect, useState } from 'react'
import SingleSkill from './SingleSkill'
import data from './data'
import AnimatedLetters from '../AnimatedLetters';
import PageWrapper from '../Layout';
import Spinner from './Spinner';

export default function Skills() {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    const filteredData = filter
        ? data.filter((skill: skillType) => skill.type === filter)
        : data;


    return (
        <PageWrapper>
            <div className='ml-6 mt-10  lg:mt-20 lg:ml-48 lg:mr-[40%]'>
                <div className='lg:mb-5 lg:ml-5'>
                    <h1 className='font-display text-4xl font-bold justify-center '>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={"The Skill Section".split("")}
                            idx={8} />
                    </h1>
                    <p className='text-[#ffd700]'>My arsenal of tools and languages consists of</p>
                </div>

                <div className=' flex flex-wrap space-x-5 space-y-4'>
                    <button />
                    {filteredData.map((skill: skillType, id: number) => (
                        <SingleSkill key={id} icon={skill.icon} name={skill.name} color={skill.color} />
                    ))}
                    <select className='select select-warning w-30 justify-end h-9 rounded-none'
                        id="filter"
                        name="filter"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <option value="">Filter</option>
                        <option value="Programming Language">Programming Language</option>
                        <option value="CSS Framework">CSS Framework</option>
                        <option value="React UI Framework">React UI Framework</option>
                        <option value="Hosting Platform">Hosting Platform</option>
                        <option value="Code Editor">Code Editor</option>
                        <option value="Operating System">Operating System</option>
                        <option value="Database">Database</option>
                    </select>
                </div>
                <div className=' hidden lg:block'>

                    <Spinner/>
                </div>
            </div>
        </PageWrapper>
    )
}
interface skillType {
    icon: string;
    name: string;
    color: string;
    type: string;

}
