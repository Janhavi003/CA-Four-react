// App.jsx
import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import { questions } from './questions'; // Update the import statement

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
    console.log('Final Score:', currentScore);
  };

  return (
    <div>
      {currentQuestionNo <= questions.length ? (
        <QuestionBox
          questionNo={currentQuestionNo}
          totalQuestions={questions.length}
          handleOptionClick={handleOptionClick}
          setCurrentScore={setCurrentScore}
          setCurrentQuestionNo={setCurrentQuestionNo}
        />
      ) : (
        <Result currentScore={currentScore} restartGame={restartGame} handleResult={handleResult} />
      )}
    </div>
  );
}