import React from 'react'

const QaCard = ({questionData,questionNumber,totalQuestions,handleAnswer,quitQuiz}) => {
  return (
    <div className='card shadow p-3 mx-2 my-2'>
      {/* header section start */}
      <div className='card-header d-flex justify-content-between p-2 bg-primary text-white'>
        <h6>Total Question:{questionNumber}/{totalQuestions}</h6>
        {/* button to quit */}
        <button
        className='btn btn-danger'
        onClick={()=>quitQuiz()}
        >Quit</button>
      </div>
      {/* header section end */}
    {/* card body start */}
    <div className='card-body'>
      {/* questions  */}
     <p className='text-danger fw-bold'>{questionData?.q}</p>
     {/* options start */}
     <div className="d-flex flex-column gap-3">
     {
        questionData?.o.map(o=>(
          <button className='btn btn-outline-primary' 
          key={o} onClick={()=>handleAnswer(o)}
          >
            {o}
          </button>
        ))
      }
     </div>
    </div>
    {/* card body end */}
      
    </div>
  )
}

export default QaCard
