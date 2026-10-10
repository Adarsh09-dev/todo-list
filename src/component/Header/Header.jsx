import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header className="main-header">
  <div className="header-container">
    <div className="logo">
      <a href="/">TaskFlow</a>
    </div>
    <nav className="nav-links">
      <Link to="/" className="nav-item active">Home</Link>
      <Link to="/About" className="nav-item">About</Link>
    </nav>
  </div>
</header>
  )
}

export default Header
