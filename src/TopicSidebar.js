import React from 'react';
import { Link } from 'react-router-dom';
import './TopicSidebar.css';

function TopicSidebar({ topics }) {
    return (
        <nav className="sidebar">
            <h3 className='select-topic'>CSE-1121 Topics</h3>
            <ul className='topic-wrapper'>
                {topics.map((topic, index) => (
                    <li className='topic-title' key={index}>
                        <Link to={`/topics/${index}`}>{topic.topicName}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default TopicSidebar;
