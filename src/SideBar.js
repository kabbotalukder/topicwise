import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import SideBarElement from './SideBarElement';
import SideBarElementSelected from './SideBarElementSelected';


const SideBar = () => {
    const topicNames = ['Introduction of C', 'Input & Output', 'Control Statements', 'Nested Looping', 'Function', 'Array', 'String', 'Pointers', 'Structure'];
    return(
        <nav className="sidebar-wrapper">
                <h3 className='seletion'>Topic Selection</h3>
                <SideBarElementSelected name={'Basic organization of computer'}/>
                {topicNames.map((name) => (
                <SideBarElement name={name}/>
                ))}
        </nav>  
    );  
}

export default SideBar;