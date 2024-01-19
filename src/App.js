// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (currentQuestion === questions.length) {
      setShowResult(true);
    }
  }, [currentQuestion]);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setCurrentScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      {showResult ? (
        <Result currentScore={currentScore} restartGame={restartGame} />
      ) : (
        <QuestionBox
          questionNo={currentQuestion + 1}
          totalQuestions={questions.length}
          handleOptionClick={handleOptionClick}
        />
      )}
    </div>
  );
}

export default App;
