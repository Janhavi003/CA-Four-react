import React, { useState, useEffect } from 'react';
import "./questionbox.css";
import questions from "./questions"; // Update this import statement

export default function QuestionBox({ questionNo, totalQuestions, handleOptionClick }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionNo - 1);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [isQuestionHighlighted, setIsQuestionHighlighted] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const highlightOption = () => {
    const correctOptionIndex = questions[currentQuestionIndex].options.findIndex(option => option.isCorrect);
    setHighlightedOption(correctOptionIndex);
    setIsQuestionHighlighted(true);
  };

  const removeHighlight = () => {
    setHighlightedOption(null);
    setIsQuestionHighlighted(false);
  };

  useEffect(() => {
    setCurrentQuestionIndex(questionNo - 1);
    setHighlightedOption(null);
    setIsQuestionHighlighted(false);
  }, [questionNo]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <button id="theme" onClick={toggleTheme}>{isDarkTheme ? 'Light' : 'Dark'}</button>
      <div className={`quiz ${isDarkTheme ? 'dark-theme' : ''}`}>
        <h2 id='questionNo'>Question {questionNo} out of {totalQuestions}</h2>
        <h1
          id='Question'
          className={isQuestionHighlighted ? 'highlighted' : ''}
        >
          {currentQuestion?.question}
        </h1>
        {currentQuestion?.options.map((option, index) => (
          <button
            key={index}
            id={`option${index + 1}`}
            onClick={() => handleOptionClick(option.isCorrect)}
            className={highlightedOption === index ? 'highlighted' : ''}
          >
            {option.text}
          </button>
        ))}
        <button id="highlight" onClick={highlightOption}>Highlight</button>
        <button id="noHighlight" onClick={removeHighlight}>Remove Highlight</button>
      </div>
    </>
  );
}
