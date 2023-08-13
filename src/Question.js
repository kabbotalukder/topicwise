import React, { useState } from 'react';

function Question({ question, questionIndex, userAnswer, handleOptionSelect }) {
    return (
        <div className="question">
            <h2>Question {questionIndex + 1}</h2>
            <p>{question.question}</p>
            <ul className="options-list">
                {question.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="option">
                        <label>
                            <input
                                type="radio"
                                name={`question_${questionIndex}`}
                                value={optionIndex}
                                checked={userAnswer === optionIndex.toString()}
                                onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
            {userAnswer !== '' && (
                <div className="answer-feedback">
                    {userAnswer === question.correctIndex.toString() ? (
                        <span className="correct-answer">Correct!</span>
                    ) : (
                        <span className="incorrect-answer">
                            Incorrect. Correct Answer: {question.options[question.correctIndex]}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default Question;
