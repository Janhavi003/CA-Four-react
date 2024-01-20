import React, { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import questions from "./questions";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const themeName = isDarkTheme ? "Dark" : "Light";

  const background = {
    background: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
    width: "100vw",
    height: "100vh",
  };

  useEffect(() => {
    // Additional logic can be added if needed when theme changes
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div style={background} className="container">
      <div className="header">
        <button onClick={handleThemeToggle} className="themeBtn">
          {themeName}
        </button>
      </div>
      <QuestionBox props={isDarkTheme} />
    </div>
  );
}

export default App;
