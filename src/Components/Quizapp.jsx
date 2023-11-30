import React, { useState } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleQuizSubmit = () => {
    const correctAnswer = questions[currentQuestion].correct;
    if (selectedOption === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {questions[currentQuestion].question}
      </div>
      <div style={style.options}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index + 1}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`option${index + 1}`}>{option}</label>
          </div>
        ))}
      </div>
      <button style={style.button} id="submitBtn" onClick={handleQuizSubmit}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}>
        {feedback}
      </div>
    </div>
  );
}
export default QuizApp