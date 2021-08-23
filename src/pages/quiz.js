import React, { useState } from "react";
import Question from "../components/Question";
import * as data from "../questions.json";

export default function Quiz() {
  const [score, setScore] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setScore(0);
    let i = 0;
    const formDate = new FormData(event.target);
    for (let value of formDate.values()) {
      if (value === data.default[i].correctAnswer) {
        setScore((score) => score + 1);
      }
      i++;
    }
  };

  return (
    <div className="container">
      <h1>Triangle Quiz</h1>
      <form onSubmit={handleSubmit} className="form-wrapper">
        {data.default.map((item) => {
          const { id, question, options } = item;

          return (
            <Question key={id} question={question} options={options} qId={id} />
          );
        })}

        <button type="submit">Submit</button>
      </form>
      <h2>Your score is: {score}</h2>
    </div>
  );
}
