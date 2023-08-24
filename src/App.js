import { useState } from "react";

import "./App.css";

import ProgressBar from 'react-bootstrap/ProgressBar';
import  Button  from "react-bootstrap/Button";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctScore,setCorrectScore] = useState(0);
  const [wrongScore,setWrongScore] = useState(0);

  let perQuestionScore = 100/(questions.length)

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + perQuestionScore);
      setCorrectScore(correctScore + perQuestionScore);
    }else(
      setWrongScore(wrongScore+perQuestionScore)
    )

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
    <div className="score-container">
      <div className="row">
        <div className="col-md-5">
          <ProgressBar now={correctScore} variant="success"/>
          <div className="mt-1 text-dark fs-5 fw-bold">{score/perQuestionScore}/{questions.length}</div>
        </div>
        <div className="col-md-2 d-flex justify-content-center"><span className="bg-dark text-light d-flex align-items-center justify-content-center" style={{borderRadius:'50%', width:40,height:40}}>{score}</span></div>
        <div className="col-md-5">
          <ProgressBar now={wrongScore} variant="danger"/>
          <div className="mt-1 text-dark fs-5 fw-bold">{wrongScore/perQuestionScore}/{questions.length}</div>
        </div>
      </div>
      
  
    </div>
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score/perQuestionScore} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default App;
