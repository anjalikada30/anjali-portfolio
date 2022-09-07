import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function HomePage(){
    return(
        <div className="HomePage">
            <header className="hero">
                <h2 className="hero-text">
                    Hi, I am   
                    <span> Anjali.</span>
                </h2>
                <p className="h-sub-text"> 
                    An organized and task driven professional with 2 years 3 months of experience in Frontend development. 
                    Ability to leverage full-stack knowledge to build interactive website design. Cohesive team worker, fire
                    fighter, having strong analytical and problem solving skills.
                </p>
                <div className="icons">
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link to={{ pathname: "https://github.com/AnjaliKada" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gb"/>
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/in/venkata-anjali-kada-7a051813a/"}} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}
export default HomePage