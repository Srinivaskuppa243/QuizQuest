import React from 'react'
import { Questions } from '../data/questions'

const TestSelection = ({onselectCategory}) => {
  // these are hardcoded values
  // let categories=["HTML","CSS","Botstrap","Javascript"]
  //for accessing dynamically
  let categories=Object.keys(Questions);


  return (
    <div className='container'>
        <h2 className='text-center m-2'>Select the Test:</h2>
      <div className="card p-4 shadow">
        <div className='d-flex justify-content-center'>
            {
                categories.map((sub)=>(
                    <button onClick={()=>onselectCategory(sub)} className='btn btn-outline-success mx-2'>
                        {sub}
                    </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TestSelection
