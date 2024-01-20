// QuestionBox.jsx
import React, { useState } from 'react';
import "./questionbox.css";
import { questions } from "./questions";

export default function QuestionBox({ questionNo, totalQuestions, handleOptionClick, setCurrentScore, setCurrentQuestionNo }) {
  // eslint-disable-next-line
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionNo - 1);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [isQuestionHighlighted, setIsQuestionHighlighted] = useState(false);
  // eslint-disable-next-line
  const [currentScore, setCurrentScoreLocal] = useState(0);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const highlightOption = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const correctOptionIndex = currentQuestion.options.findIndex(option => option.isCorrect);
      setHighlightedOption(correctOptionIndex);
      setIsQuestionHighlighted(true);
    }
  };

  const removeHighlight = () => {
    setHighlightedOption(null);
    setIsQuestionHighlighted(false);
  };

  const updateCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const newQuestionNo = questionNo + 1;
      setCurrentQuestionIndex(newQuestionNo - 1);
      setHighlightedOption(null);
      setIsQuestionHighlighted(false);

      if (newQuestionNo > totalQuestions) {
        console.log('Game Over! Total Score:', currentScore);
      }
    }
  };

  const handleOptionSelection = (isCorrect) => {
    if (isCorrect) {
      setCurrentScoreLocal(prevScore => prevScore + 1);
    }
  };

  const handleOptionClickWrapper = (isCorrect) => {
    handleOptionClick(isCorrect);
    handleOptionSelection(isCorrect);
    updateCurrentQuestion();
  };

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
          {currentQuestion ? currentQuestion.question : 'No question available'}
        </h1>
        {currentQuestion?.options.map((option, index) => (
          <button
            key={index}
            id={`option${index + 1}`}
            onClick={() => handleOptionClickWrapper(option.isCorrect)}
            className={highlightedOption === index ? 'highlighted' : ''}
            disabled={highlightedOption !== null}
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