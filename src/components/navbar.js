import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../assets/images/logo.png';
// import resumeIcon from '../assets/images/resume-icon.svg'
// import skillsIcon from '../assets/images/skills-icon.svg'
import projectsIcon from '../assets/images/projects-icon.svg'

function NavBar() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

    useEffect(() => {
        const navbarToggle = document.getElementById('navbar-toggle');

        const toggleNavbarVisibility = () => {
            setIsNavbarExpanded(prevState => !prevState);
        };

        navbarToggle.addEventListener('click', toggleNavbarVisibility);

        return () => {
            navbarToggle.removeEventListener('click', toggleNavbarVisibility);
        };
    }, []);

    return (
        <nav className="navbar-container container">
            <a href="/DataAnalystPortfolio" className="home-link">
                <div className="navbar-logo"><img alt='home-link-logo' className='navbar-logo-img' src={logo}/></div>
                RAHMA.IDAY
            </a>

            <button
                type="button"
                id="navbar-toggle"
                aria-controls="navbar-menu"
                aria-label="Toggle menu"
                aria-expanded={isNavbarExpanded}
            >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>

            <div id="navbar-menu" aria-labelledby="navbar-toggle">
                <ul className={`navbar-links ${isNavbarExpanded ? 'expanded' : ''}`}>
                    <li className="navbar-item"><a className="navbar-link" href="#projects">
                        <div className="item-logo-div"><img alt='project-link-logo' className='item-img' src={projectsIcon}/></div>
                        Projects</a></li>
                    {/* <li className="navbar-item"><a className="navbar-link" href="/blog">
                        <div className="item-logo-div"><img className='item-img' src={skillsIcon}/></div>
                        Skills</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="/careers">
                        <div className="item-logo-div"><img className='item-img' src={resumeIcon}/></div>
                        Resume</a></li> */}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
