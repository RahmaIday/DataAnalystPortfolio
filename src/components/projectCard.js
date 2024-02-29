import React from 'react';
import './projectCard.css';

function ProjectCard(props) {
    const { project } = props;

    return (
        <a target="_blank" rel="noreferrer" href={project.projectLink} className='project-card-div'>
            <div className='project-card-img-div'>
                <img className='project-card-img' alt='projectHero' src={project.imageUrl}></img>
                <div className='project-card-img-overlay'>
                    Click to View Project
                </div>
            </div>
            <div className='project-text-container'>
                <div className='skills-div-main'>
                    {project.skills.map((skill, index) => (
                        <div key={index} className='skill'>{skill}</div>
                    ))}
                </div>
                <div className='project-card-title'>
                    {project.title}
                </div>
                <div className='project-card-desc'>{project.description}</div>
            </div>
        </a>
    );
}


export default ProjectCard;
