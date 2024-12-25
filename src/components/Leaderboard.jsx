import React from 'react'

const Leaderboard = ({leaderBoard}) => {
  console.log(leaderBoard)
  let category=Object.keys(leaderBoard)
  return (
    <div className='container my-3 p-3'>
      <h2 className='text-center'>Leader Board</h2>
      {/* leaderboard start */}
      {
        (category.length==0)?(<p className='text-center'>Your first to score</p>):(
          <>
          <table className="table table-bordered shadow">
            {/* table header section */}
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            {/* table body  */}
            <tbody>
              {
                category.map((sub)=>(
                  <tr key={sub}>
                    <td>{sub}</td>
                    <td>{leaderBoard[sub]}</td>
                  </tr>
                ))
              }
            </tbody>
            </table>
          </>
        )
      }




      {/* leaderboard start */}
    </div>
  )
}

export default Leaderboard
