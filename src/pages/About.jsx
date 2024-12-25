import React from 'react'

const About = () => {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center mb-4">About QuizQuest</h1>
        <div className="row">
          <div className="col">
            <img 
              src="./src/assets/about.jpeg" 
              alt="Quiz Illustration" 
              className="img-fluid rounded"
              height={"200px"}
            />
          </div>
          <div className="col">
            <p className="lead">
              Welcome to QuizQuest, your ultimate destination for engaging, interactive, and educational quizzes! 
              Whether you're looking to challenge your knowledge, learn something new, or simply have fun, QuizQuest has 
              something for everyone.
            </p>
            <p>
              Our platform is designed to cater to a variety of topics and difficulty levels, ensuring a rewarding experience 
              for all users. From general knowledge to niche subjects, QuizQuest is here to spark your curiosity and keep you learning.
            </p>
            <p>
              Our mission is to make learning enjoyable and accessible. We believe that quizzes are not just a tool for assessment 
              but a powerful way to explore new ideas and reinforce existing knowledge.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3>Why Choose QuizQuest?</h3>
          <ul>
            <li>Wide range of quiz topics</li>
            <li>Interactive and user-friendly interface</li>
            <li>Track your progress and compete with friends</li>
            <li>Regularly updated content</li>
          </ul>
          <p>
            Ready to dive into the world of quizzes? Join us today and start your journey of fun and learning!
          </p>
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

export default About
