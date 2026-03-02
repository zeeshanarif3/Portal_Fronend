import React, { useState } from "react";
import "./Navbar.css";
import { FaGraduationCap, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <FaGraduationCap className="logo-icon" />
          <span className="logo-text">Tech Mars</span>
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#">Preparation</a>
          <a href="#">Courses</a>
          <a href="#">All Companies</a>
          <Link to="/dashboard/active">Active Courses</Link>
        </nav>

        {/* Right Side */}
        <div className="nav-right">
          <div className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </div>
          <button className="signin-btn">Sign In</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;