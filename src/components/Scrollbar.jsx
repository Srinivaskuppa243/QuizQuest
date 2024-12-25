import React from 'react'

const Progressbar = ({currQuestion,totalQuestions}) => {
  let progress=((currQuestion+1)/totalQuestions)*100;
  return (
    <div className='mt-3 mx-2'>
      <div className="progress" style={{height:"2%"}}>
      <div 
        className="progress-bar" 
        role='progressbar'
        style={{width:`${progress}%`,background:"green"}} 
        aria-valuenow={progress}
        aria-valuemin="0" 
        aria-valuemax="100"
      />
      <p className='text-center mt-2'>{Math.round(progress)}% completed</p>
    </div>
  </div>
  )
}

export default Progressbar
