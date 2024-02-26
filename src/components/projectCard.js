import React from 'react';
import './projectCard.css';

function ProjectCard(props) {
    const { project } = props;

    return (
        <div className='project-card-div'>
            <div>
                <a href={project.projectLink} className='project-card-title'>
                    {project.title}
                </a>
                <br></br>
                <br></br>
                <div className='project-card-desc'>{project.description}</div>
                <br></br>
                {/* <div className='skills-title'>Skills:</div> */}
                <div className='skills-div-main'>
                    {project.skills.map((skill, index) => (
                        <div key={index} className='skill'>{skill}</div>
                    ))}
                </div>
            </div>
            <div className='project-card-img-div'>
                <img className='project-card-img' alt='projectHero' src={project.imageUrl}></img>
            </div>
        </div>
    );
}

export default ProjectCard;
