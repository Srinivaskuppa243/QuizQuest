import React from 'react'

const Pricing = () => {
  return (
    <div>
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Pricing Plans</h1>
      <div className="row m-4">
        {/* Basic Plan */}
        <div className="col p-4 mb-4">
          <div className="card shadow d-flex flex-column">
            <div className="card-body flex-grow-1">
              <h5 className="card-title text-center bg-dark text-light rounded-1 p-3"><b>Basic</b></h5>
              <p className="card-text">Price:</p>
              <h3 className='p-5'><b>Free</b></h3>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill"></i> Access to 5 Quizzes</li>
                <li><i className="bi bi-bar-chart-line-fill"></i> Limited Analytics</li>
                <li><i className="bi bi-person-fill"></i> 1 User</li>
              </ul>
              <div className="text-center">
                <button className="btn btn-primary m-3">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col p-4 mb-4">
          <div className="card shadow d-flex flex-column">
            <div className="card-body flex-grow-1">
              <h5 className="card-title text-center bg-dark text-light rounded-1 p-3"><b>Pro</b></h5>
              <p className="card-text ">Price: </p>
              <h3 className='p-5'><b>₹1400/month</b></h3>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill"></i> Unlimited Quizzes</li>
                <li><i className="bi bi-bar-chart-line"></i> Premium Analytics and Reports</li>
                <li><i className="bi bi-person-lines-fill"></i> Unlimited Users</li>
                <li><i className="bi bi-headset"></i> Priority Support</li>
              </ul>
              <div className="text-center">
                <button className="btn btn-primary m-3">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col p-4 mb-4">
          <div className="card shadow d-flex flex-column">
            <div className="card-body flex-grow-1">
              <h5 className="card-title text-center bg-dark text-light rounded-1 p-3"><b>Premium</b></h5>
              <p className="card-text">Price:</p>
              <h3 className='p-5'><b>₹4400/month</b></h3>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill"></i> Unlimited Quizzes</li>
                <li><i className="bi bi-person-fill"></i> Unlimited Users</li>
                <li><i className="bi bi-file-earmark-zip-fill"></i> Full Access to Custom Quiz Creation and Templates</li>
                <li><i className="bi bi-headset"></i> Priority Support</li>
              </ul>
              <div className="text-center">
                <button className="btn btn-primary m-3">Subscribe</button>
              </div>
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

export default Pricing
