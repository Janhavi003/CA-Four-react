// questionbox.jsx
import React, { useState } from "react";
import question from "../questions";
import Result from "./Result";
import "./questionbox.css";

export default function QuestionBox(props) {
  // State variables
  const [highlight, setHighlight] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  // Handle user's option selection
  const handleOption = (option) => {
    const isCorrect = option.isCorrect;
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    setQuestionNumber((prevNumber) => prevNumber + 1);
  };

  // Toggle highlight for the current question
  const toggleHighlight = (shouldHighlight) => {
    setHighlight(shouldHighlight);
  };

  // Get the current question from the question array
  const currentQuestion = question[questionNumber];

  return (
    <>
      {/* Display questions until the user has answered 5 questions */}
      {questionNumber < 5 ? (
        <div className="question-box">
          <h2 id="questionNo">Question: {questionNumber + 1} out of 5</h2>
          <h3
            id="Question"
            style={{ color: highlight ? "red" : "black" }}
          >
            {currentQuestion.text}
          </h3>
          <div className="options-box">
            {/* Display options for the current question */}
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className="option"
                onClick={() => handleOption(option)}
                disabled={highlight}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div>
            {/* Buttons to highlight and remove highlight */}
            <button
              className="highlight-btn"
              onClick={() => toggleHighlight(true)}
            >
              Highlight
            </button>
            <button
              className="highlight-btn"
              onClick={() => toggleHighlight(false)}
            >
              Remove Highlight
            </button>
          </div>
        </div>
      ) : (
        // Display result component once the user has answered all questions
        <Result props={[score, props.props]} />
      )}
    </>
  );
}
