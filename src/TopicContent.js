import React from 'react';
import './TopicContent.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function TopicContent({ topic }) {
    return (
        <div className="content">
            <h2>{topic.topicName}</h2>
            <hr />
            <div>
                {topic.concepts.map((concept, index) => (
                    <div key={index}>
                        <h3>{concept.title}</h3>
                        <p>{concept.description}</p>
                    </div>
                ))}
            </div>
            <Link to={`/quiz/${topic.topicName}`} className="quiz-button">Quiz</Link> {/* Link to the corresponding quiz page */}
        </div>
    );
}

export default TopicContent;





