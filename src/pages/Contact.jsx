import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className="container my-5">
      <h1 className="text-center">Contact Us</h1>
      <div className='card shadow p-4'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br />
    </div>
    <p className='mt-4'>You can also reach us at:</p>
      <address>
        456 Rose Avenue<br />
        Bangalore, Karnataka 560001<br />
        India<br />
      </address>
    </div>
    <footer className='bg-dark text-white text-center py-3'>
        <p>© 2024 QuizApp. All rights reserved.</p>
        <p><a href="privacy-policy.html" className='text-decoration-none text-white'>Privacy Policy</a> 
        | <a href="terms.html" className='text-decoration-none text-white'>Terms of Service</a></p>
    </footer>
    </div>
  )
}

export default Contact
