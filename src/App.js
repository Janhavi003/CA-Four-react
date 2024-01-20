import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import questions from "./questions";

function App() {
  // State for managing dark theme
  const [isDarkTheme, setDarkTheme] = useState(false);
  const themeName = isDarkTheme ? "Dark" : "Light";

  // Styles for background based on theme
  const background = {
    background: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
    width: "100vw",
    height: "100vh",
  };
  // Handler for toggling between dark and light themes
  const handleThemeToggle = () => {
    setDarkTheme(!isDarkTheme);
  };
  return (
    // Main container with dynamic background style
    <div style={background} className="container">
      {/* Header with theme toggle button */}
      <div className="main">
        <button onClick={handleThemeToggle} className="themeBtn">
          {themeName}
        </button>
      </div>
      {/* Component for displaying questions */}
      <QuestionBox props={isDarkTheme} />
    </div>
  );
}

export default App;
