import React from "react";
import './skills.css';
import './section.css';
import {Fade, Slide} from "react-reveal";
import compani from '../assets/images/comp3ani.gif'


function Skills(){
    return(
        <div className= "section-main-div skills-main-div">
            <Fade left duration={1000}>
                <div className="skills-left-div">
                    <img src={compani} alt="graphs and data animation"></img>
                </div>
            </Fade>
            <Fade right duration={1000}>
                <div className="skills-right-div">
                <div className="section-title"> What I do</div>

                </div>

            </Fade>
        </div>
    );
}

export default Skills;