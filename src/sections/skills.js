import React from "react";
import './skills.css';
import './section.css';
import Fade from "react-reveal";
import compani from '../assets/images/comp3ani.gif'
import skillDetails from "../details/skillDetails";

function Skills(){
    const skillsOpener = "A DATA ANALYST ON A MISSION TO FIND ALL THE DATA PATTERNS THAT WERE MISSED";
    // const summaryPoints = {
    //     point1:"",
    //     point2:""
    // };

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
                <div className="skills-text">{skillsOpener}</div>
                <div className="skills-icons-main-div">
                    {Object.keys(skillDetails).map((key, index) => (
                        <div key={index} className="skill-icon-div">
                            <img className="skill-image" src={skillDetails[key].imageUrl} alt={skillDetails[key].title}></img>
                            <div className="skill-name">{skillDetails[key].title}</div>
                        </div>
                    ))}
                </div>
                {/* <div className="skills-text">{summaryPoints}</div> */}
                </div>

            </Fade>
        </div>
    );
}

export default Skills;