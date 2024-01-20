// Result.jsx
import React, { useState } from 'react';
import "./result.css";

export default function Result({ currentScore, restartGame }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <button id="theme" onClick={toggleTheme}>{isDarkTheme ? 'Light' : 'Dark'}</button>
      <div className={`results ${isDarkTheme ? 'dark-theme' : ''}`}>
        <h1 id='finalResult'>Final Results</h1>
        <h2 id='noofquestion'>{currentScore} out of 5 correct - ({((currentScore / 5) * 100).toFixed(2)}%)</h2>
        <button id="restart" onClick={restartGame}>Restart game</button>
      </div>
    </>
  );
}
