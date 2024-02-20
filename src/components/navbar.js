import React, { useEffect, useState } from 'react';
import './navbar.css';

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
            <a href="/" className="home-link">
                <div className="navbar-logo"></div>
                Rahma Iday
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
                    <li className="navbar-item"><a className="navbar-link" href="/about">Projects</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="/blog">Skills</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="/careers">Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
