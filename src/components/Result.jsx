import React from 'react'
import "./result.css"
export default function Result() {
  return (
    <>
      <button id="theme">Light</button>
      <div className="results">
        <h1 id='finalResult'>Final Results</h1>
        <h2 id='noofquestion'>1 out of 5 correct - (20%)</h2>
        <button id="restart">Restart game</button>
      </div>
    </>
  )
}
