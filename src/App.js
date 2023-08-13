import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopicSidebar from './TopicSidebar';
import TopicContent from './TopicContent';
import Quiz from './Quiz';
import topicsData from './topicsData.json';
import Navbar from './NavBar';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <div className='for-nav'>
                <Navbar />
                <div className='side-cont'>
                <TopicSidebar topics={topicsData.topics} />
                <Routes>
                    {topicsData.topics.map((topic, index) => (
                        <Route key={index} path={`/topics/${index}`} element={<TopicContent topic={topic} />} />
                    ))}
                    {topicsData.topics.map((topic, index) => (
                        <Route key={index} path={`/quiz/${topic.topicName}`} element={<Quiz quizData={topic.quizzes} />} />
                    ))}
                </Routes>
                </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
