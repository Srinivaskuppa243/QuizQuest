import React from 'react'

const Features = () => {
  return (
    <div>
    <div className="container my-5">
    <h1 className="text-center mb-5">Features of QuizApp</h1>
    <div className="row text-center p-4 m-4">
      {/* Feature 1 */}
      <div className="col mb-4">
        <div className="card shadow">
          <div className="card-body">
            <i className="bi bi-lightbulb-fill text-primary fs-1"></i>
            <h5 className="card-title mt-4">Interactive Quizzes</h5>
            <p className="card-text">
              Enjoy fun and engaging quizzes with instant feedback and explanations for every answer.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <div className="card-body">
          <i className="bi bi-graph-up-arrow text-success fs-1"></i>
            <h5 className="card-title mt-4">Progress Tracking</h5>
            <p className="card-text">
              Monitor your performance with detailed analytics and track your improvement over time.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <div className="card-body">
            <i className="bi bi-globe text-danger fs-1"></i>
            <h5 className="card-title mt-4">Wide Range of Topics</h5>
            <p className="card-text">
              Access quizzes across various categories, from general knowledge to specialized subjects.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <div className="card-body">
            <i className="bi bi-trophy text-warning fs-1"></i>
            <h5 className="card-title mt-4">Competitive Leaderboards</h5>
            <p className="card-text">
              Compete with friends or players worldwide and climb to the top of the leaderboard.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 5 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <div className="card-body">
            <i className="bi bi-gear-fill text-secondary fs-1"></i>
            <h5 className="card-title mt-4">Customizable Quizzes</h5>
            <p className="card-text">
              Create personalized quizzes tailored to your learning goals or interests.
            </p>
          </div>
        </div>
      </div>

      {/* Feature 6 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow">
          <div className="card-body">
            <i className="bi bi-person-lines-fill text-info fs-1"></i>
            <h5 className="card-title mt-4">User-Friendly Interface</h5>
            <p className="card-text">
              Navigate effortlessly with an intuitive design optimized for all devices.
            </p>
          </div>
        </div>
      </div>
      </div> 
  </div>
  <footer className='bg-dark text-white text-center py-3'>
        <p>© 2024 QuizApp. All rights reserved.</p>
        <p><a href="privacy-policy.html" className='text-decoration-none text-white'>Privacy Policy</a> 
        | <a href="terms.html" className='text-decoration-none text-white'>Terms of Service</a></p>
  </footer>
  </div>
  )
}

export default Features
