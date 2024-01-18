import React from 'react'
import "./questionbox.css"

export default function QuestionBox() {
  return (
    <>
      <button id="theme">Light</button>
      <div className="quiz">
        <h2 id='questionNo'>Question 1 out of 5</h2>
        <h1 id='Question'>What is React JS ? </h1>
          <button id="option1">Server-side framework</button>
          <button id="option2">user interface framework</button>
          <button id="option3">both a and b</button>
          <button id="option4">none of the above</button>
          <button id="highlight">Highlight</button>
          <button id="noHighlight">Remove Highlight</button>
      </div>
    </>
  )
}
