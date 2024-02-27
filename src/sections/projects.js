import React from 'react';
import './projects.css';
import projectDetails from '../data/projectDetails';
import ProjectCard from '../components/projectCard';

function Projects() {
    
    return (
        <div className='project-main-div'>
            <h1 id="projects" className='project-title'>Projects</h1>
            <div className='repo-cards-div-main'>
                {Object.keys(projectDetails).map((projectKey) => {
                    const project = projectDetails[projectKey];
                    return (
                        <ProjectCard key={projectKey} project={project} />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
