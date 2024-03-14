import React from 'react';
import './projects.css';
import './section.css'

import projectDetails from '../details/projectDetails';
import ProjectCard from '../components/projectCard';

function Projects() {
    
    return (
        <>
            <div className='section-main-div'>
                <h1 id="projects" className='section-title'>Projects</h1>
                <div className='repo-cards-div-main'>
                {Object.keys(projectDetails).map((projectKey) => {
                    const project = projectDetails[projectKey];
                    return (
                        <ProjectCard key={projectKey} project={project} />
                    );
                })}
                </div>
            </div>
            
        </>
        
    );
}

export default Projects;
