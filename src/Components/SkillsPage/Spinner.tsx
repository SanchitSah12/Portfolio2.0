
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
const Spinner = () => {

    return (
        <>
            <div className='container about-page'>

                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color='green' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color='#3685e0ec' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color='blue' />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faHtml5} color='orange' />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faDatabase} className='rotate-90' color='white' />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJava} className='-rotate-90' color='brown' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spinner