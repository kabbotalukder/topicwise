// Navbar.js
import React from 'react';
import './Navbar.css'; // Import your navbar styles

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1 style={{ color: '#2196f3' }}>TopicWise</h1>
            </div>
                <p className='developer'>Developed by <a className='dev-link' href='https://facebook.com/kabbotalukder'>Kabbo Talukder</a></p>
        </nav>
    );
}

export default Navbar;
