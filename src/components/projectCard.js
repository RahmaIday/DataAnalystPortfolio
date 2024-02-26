import React from 'react';
import './projectCard.css';

function ProjectCard(props) {
    const { project } = props;
    
    return (
        <div className='project-card-div'>
            <div>
                <div className='project-card-title'>{project.title}</div>
                <br></br>
                <div className='project-card-desc'>{project.description}</div>
            </div>
            <div className='project-card-img-div'>
                <img className='project-card-img' alt='projectHero' src={project.imageUrl}></img>
            </div>
        </div>
    );
}

export default ProjectCard;
