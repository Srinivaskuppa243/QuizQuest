import React from 'react'
import Confetti from 'react-confetti'

const QaResults = ({score,totalQuestions,retakeQuiz,quitQuiz}) => {
  console.log(score,totalQuestions)
  let isHighscore=score==totalQuestions;
  return (
    <div className='text-center mt-5 '>
     {isHighscore && <Confetti recycle={false} numberOfPieces={500} />}
     {/* displaying the quiz completed */}
     <h2 className="text-center">Quiz Completed</h2>
     {/* displaying the result*/}
     <p className='text-center'> Score: <strong>{score}/{totalQuestions}</strong></p>
     {/* displaying the buttons to retake quiz or quit*/}
     <div className="result-buttons d-flex justify-content-center my-2">
        <button className='btn btn-success mx-2'
        onClick={()=>retakeQuiz()}>Retake</button>
        <button className='btn btn-danger'
        onClick={()=>quitQuiz()}>Quit</button>
     </div>

    </div>
  )
}

export default QaResults
