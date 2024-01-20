// questionbox.jsx
import React, { useState } from "react";
import question from "../questions";
import Result from "./Result";
import "./questionbox.css";

export default function QuestionBox(props) {
  const [highlight, setLight] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const handleOption = (option) => {
    const isCorrect = option.isCorrect;
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    setQuestionNumber((prevNumber) => prevNumber + 1);
  };

  const toggleHighlight = (shouldHighlight) => {
    setLight(shouldHighlight);
  };

  const currentQuestion = question[questionNumber];

  return (
    <>
      {questionNumber < 5 ? (
        <div className='question-box'>
          <h2 id="questionNo">Question: {questionNumber + 1} out of 5</h2>
          <h3 id="Question" style={{ color: highlight ? "red" : "black" }}>
            {currentQuestion.text}
          </h3>
          <div className='options-box'>
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className='option'
                onClick={() => handleOption(option)}
                disabled={highlight}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div>
            <button
              className='highlight-btn'
              onClick={() => toggleHighlight(true)}
            >
              Highlight
            </button>
            <button
              className='highlight-btn'
              onClick={() => toggleHighlight(false)}
            >
              Remove Highlight
            </button>
          </div>
        </div>
      ) : (
        <Result props={[score, props.props]} />
      )}
    </>
  );
}
