import React from "react";
import "./result.css";

export default function Result(props) {
  const correctAnswers = props.props[0];
  const isDarkTheme = props.props[1];

  const resultStyle = {
    background: isDarkTheme ? "#fff" : "black",
    
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div id="results" style={resultStyle} className="results">
      <h1 id="finalResult">Final Results</h1>
      <h2 id="noofquestion">{correctAnswers} out of 5 correct - {((correctAnswers / 5) * 100).toFixed(2)}%</h2>
      <button id="restart-btn" onClick={handleRestart}>
        Restart game
      </button>
    </div>
  );
}
