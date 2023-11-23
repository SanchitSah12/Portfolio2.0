import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { Link } from "react-router-dom";
import PageWrapper from "../Layout";
import LoadingScreen from "../LoadingScreen";

function About() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 200)
        return () => clearTimeout(timeoutId)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])
    return (
        isLoading ? (<div className="bottom-[6%] left-[42%] absolute"><LoadingScreen/></div>):(
        <PageWrapper>
            <section className="mx-5 text-white p-4 lg:flex m-[5%] reveal lg:mx-60 lg:mb-32" id="about">

                <div className="lg:m-4 lg:ml-10 ">
                    <img className="w-52 h-52 block ml-auto mr-auto rounded-full lg:h-72 lg:w-72 lg:absolute lg:translate-y-[2rem]" src="/Sanchit.jpg" alt="" />
                </div>

                <div className=" mt-10 lg:ml-80">
                    <h1 className="text-2xl lg:text-4xl font-display font-bold">
                        <AnimatedLetters letterClass={letterClass}
                            strArray={"About Me".split("")}
                            idx={8} />
                    </h1>
                    <br />
                    <p className="text-justify">I am Sanchit Sah from Nainital Uttarakhand, currently a student of B.Tech IT in Vellore Institute of Technology. I am a Web Developer and am also exploring various other fields. I love to learn new technologies and work with them. I have experience in various web development frameworks and libraries and have worked in various projects. If you wanna collaborate or just have a chat <Link className="font-display text-yellow-400" to={'/contact'}>contact me</Link>. <br /><br />Thanks for visiting. </p>

                    {/* <div className="mt-5 lg:mt-16 lg:ml-52 lg:mr-32  p-4 rounded-lg">
                    <h1 className="">External Links:</h1>
                    <br />
                    <div className="flex flex-row space-x-4">

                    </div>
                </div> */}

                </div>
            </section>
        </PageWrapper>)
    )

}


export default About;