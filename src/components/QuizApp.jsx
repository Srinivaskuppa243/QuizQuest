import React from 'react'
import TestSelection from './TestSelection'
import { useState } from 'react'
import {Questions} from '../data/questions'
import QaCard from './QaCard.jsx'
import QaResults from './QaResults.jsx'
import Progressbar from './Scrollbar.jsx'
import Leaderboard from './Leaderboard.jsx'

const QuizApp = () => {
const [selectCategory,setSelectCategory]=useState(null)
const[currQuestion,setCurrQuestion]=useState(0)
const[score,setScore]=useState(0)
const[showSumm,setShowSumm]=useState(false)
const[lead,setLead]=useState({})

//handling the selection category
function handleselectCategory(Category){
  console.log(Category)
  setSelectCategory(Category)
  setCurrQuestion(0)
  setScore(0)
  setShowSumm(false)

}
// console.log(Questions[selectCategory]?.[currQuestion]?.a)
//handling the answer


function handleAnswer(selectedOption){

  // checking correct answer
  let corrAns=Questions[selectCategory]?.[currQuestion]?.a
  if(selectedOption===corrAns)setScore(prev=>prev+1)

    //updating the question
    if(currQuestion<Questions[selectCategory].length-1){
      setCurrQuestion(prev=>prev+1)
    }else{
      setShowSumm(true);
      const updatedLeaderBoard={
        ...lead,
        [selectCategory]:Math.max(score+1,lead[selectCategory]||0)
      }
      setLead(updatedLeaderBoard)
      localStorage.setItem("leaderboard",JSON.stringify(updatedLeaderBoard))
    }

}
// function for retaking quiz
function retakeQuiz(){
  setCurrQuestion(0)
  setScore(0)
  setShowSumm(false)
}

// function for quitting
function Quit(){
  setSelectCategory(null)
  setCurrQuestion(0)
  setScore(0)
  setShowSumm(false)
}

  return (
    <div>
        {
          !selectCategory?( <TestSelection onselectCategory={handleselectCategory}/>)
          :!showSumm?(
          <>
           <Progressbar currQuestion={currQuestion} totalQuestions={Questions[selectCategory].length}/>
            <QaCard
              questionData={Questions[selectCategory][currQuestion]}
              questionNumber={currQuestion+1}
              totalQuestions={Questions[selectCategory].length}
              handleAnswer={handleAnswer}
              quitQuiz={Quit}
            />
          </>
          ):(
          <>
            <QaResults
              score={score}
              totalQuestions={Questions[selectCategory].length} 
              quitQuiz={Quit}
              retakeQuiz={retakeQuiz}
            />
            {/* LeaderBoard section */}
            <Leaderboard leaderBoard={lead}/>
          </>
          )}
     
    </div>
  )
}

export default QuizApp
