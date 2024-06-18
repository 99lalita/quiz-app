import React from "react";

const Result = ({ questions, userAnswers, resetQuiz = () => {} }) => {
  const correctAns = userAnswers.filter((option) => option).length;
  return (
    <div className="results">
      <h2>Results</h2>

      <p>
        You answered {correctAns} out of {questions.length}
        <span onClick={resetQuiz}> Click Here to Retry</span>
      </p>

      <ul>
        {questions.map((question, index) => (
          <li key={index} data-correct={userAnswers[index]}>
            Q{index + 1}.{question.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
