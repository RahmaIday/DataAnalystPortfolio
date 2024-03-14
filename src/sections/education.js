import React from "react";
import './education.css';
import './section.css';
import RMITLogo from '../assets/images/RMITLOGO.png';
import {Fade, Slide} from "react-reveal";

function Education(){

    return(
        <div className='section-main-div'>
            <h1 id="education" className='section-title'>Education</h1>
            <Fade left duration={1000}>
            <div className="education-container">
                <img alt="rmit logo" src={RMITLogo} className="education-img"></img>
                <div className="institution">Royal Melbourne Institute of Technology</div>
                <div className="degree">Bachelor in Computer Science</div>
                <div className="duration">March 2021 - November 2024</div>
            </div>
            </Fade>
            <Slide left duration={2000}>
            <div className="education-card-border"></div>
            </Slide>
        </div>
    );
}

export default Education;