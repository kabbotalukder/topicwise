import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1 className='project-title' style={{ color: '#2196f3' }}>TopicWise</h1>
            </div>
            <p className='developer'>Developed by <a target='_blank' className='dev-link' href='https://www.linkedin.com/in/kabbotalukder/'>Kabbo Talukder</a></p>
        </nav>
    );
}

export default Navbar;
