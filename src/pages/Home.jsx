import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="p-5 text-center bg-image" style={{
        backgroundImage: `url('/src/assets/quiz_image.jpeg')`,
        height: "80vh",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover"
      }}>
        <div className="d-flex justify-content-center align-items-left" style={{ height: '100%' }}>
          <div className="text-white">
            <h1>SKILLS TEST TO HIRE THE BEST</h1>
            <NavLink to="/quiz">
              <button className="btn btn-outline-light m-3">Take the test now!</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row m-5">
        <h2 className="text-center">What Our Customers Say</h2>

        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <blockquote className="blockquote text-center p-3">
              <p>"This is the best service I've ever used! Highly recommend it to anyone."</p>
              <footer className="blockquote-footer">John Doe</footer>
            </blockquote>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <blockquote className="blockquote text-center p-3">
              <p>"This quiz app helped me improve my knowledge in a fun and engaging way!"</p>
              <footer className="blockquote-footer">Jane Smith</footer>
            </blockquote>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <blockquote className="blockquote text-center p-3">
              <p>"The questions were challenging, and I loved the instant feedback."</p>
              <footer className="blockquote-footer">Mark Johnson</footer>
            </blockquote>
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

export default Home
