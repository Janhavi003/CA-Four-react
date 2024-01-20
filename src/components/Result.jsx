import React from "react";
import "./result.css";

// Result component receives props and displays the final quiz results
export default function Result(props) {
  // Destructure props to get correctAnswers and isDarkTheme
  const [correctAnswers, isDarkTheme] = props.props;

  // Style for the result container, changes background based on theme
  const resultStyle = {
    background: isDarkTheme ? "#fff" : "black",
  };

  // Function to handle restart by reloading the window
  const handleRestart = () => {
    window.location.reload();
  };

  // JSX for displaying the final results and restart button
  return (
    <div id="results" style={resultStyle} className="results">
      <h1 id="finalResult">Final Results</h1>
      <h2 id="noofquestion">
        {correctAnswers} out of 5 correct - {((correctAnswers / 5) * 100).toFixed(2)}%
      </h2>
      <button id="restart-btn" onClick={handleRestart}>
        Restart game
      </button>
    </div>
  );
}
