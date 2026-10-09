import React from 'react'
import "./Header.css"

const Header = () => {
  return (
<header className="main-header">
  <div className="header-container">
    <div className="logo">
      <a href="/">TaskFlow</a>
    </div>
    <nav className="nav-links">
      <a href="#" className="nav-item active">Home</a>
      <a href="#" className="nav-item">About</a>
    </nav>
  </div>
</header>
  )
}

export default Header
