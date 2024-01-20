// App.jsx
import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import Result from './Result';
import { questions } from './questions'; // Import the questions array

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(1);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  const restartGame = () => {
    setCurrentScore(0);
    setCurrentQuestionNo(1);
  };

  const handleResult = () => {
    // Handle the result logic (e.g., redirect, show modal, etc.)
    console.log('Final Score:', currentScore);
  };

  return (
    <div>
      {currentQuestionNo <= questions.length ? (
        <QuestionBox
          questionNo={currentQuestionNo}
          totalQuestions={questions.length}
          handleOptionClick={handleOptionClick}
        />
      ) : (
        <Result currentScore={currentScore} restartGame={restartGame} handleResult={handleResult} />
      )}
    </div>
  );
}
