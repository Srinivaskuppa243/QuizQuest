import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse justify-content-between p-2"id="navbarNav">
      <NavLink className="navbar-brand" to="/">QuizQuest</NavLink>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/features">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button className='btn btn-outline-light'>Sign up!</button>
    </div>
  </nav>
  )
}

export default Navbar
