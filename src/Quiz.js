import React, { useState } from 'react';
import './Quiz.css';

function Quiz({ quizData }) {
    const [userAnswers, setUserAnswers] = useState(Array(quizData.questions.length).fill(''));
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (questionIndex, optionIndex) => {
        const correctAnswerIndex = quizData.questions[questionIndex].correctIndex;
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = {
            selectedOption: optionIndex,
            correctAnswer: correctAnswerIndex,
        };
        setUserAnswers(updatedAnswers);
    };

    const isAnswerSelected = (questionIndex) => userAnswers[questionIndex]?.selectedOption !== undefined;

    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((userAnswer, index) => {
            if (userAnswer.selectedOption === quizData.questions[index].correctIndex) {
                score += 1;
            }
        });
        return score;
    };

    const allQuestionsAnswered = userAnswers.every(answer => answer !== '');

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">{quizData.quizTitle}</h1>
            {quizData.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="question">
                    <h2>Question {questionIndex + 1}</h2>
                    <p>{question.question}</p>
                    <ul className="options-list">
                        {question.options.map((option, optionIndex) => (
                            <li
                                key={optionIndex}
                                className={`option ${isAnswerSelected(questionIndex) ? 'locked' : ''} ${userAnswers[questionIndex]?.selectedOption === optionIndex ? (userAnswers[questionIndex]?.correctAnswer === optionIndex ? 'correct' : 'wrong') : ''}`}
                                onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {allQuestionsAnswered && (
                <div className="result">
                    <h2>Result: {calculateScore()} / {quizData.questions.length}</h2>
                </div>
            )}
        </div>
    );
}

export default Quiz;
