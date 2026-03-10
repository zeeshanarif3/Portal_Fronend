import React, { useState } from "react";
import "./navbar.css";
// import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";
import { FaCode, FaTrophy, FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
      <div className="logo">
    <FaCode /> DSA Mastery
  </div>


        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* Preparation Dropdown */}
          {/* <div className="dropdown">
            <span className="dropdown-title">Preparation</span>

            <div className="dropdown-menu">
              <Link to="/prep/dsa">DSA</Link>
              <Link to="/prep/oops">OOPS</Link>
              <Link to="/prep/dbms">DBMS</Link>
              <Link to="/prep/os">Operating System</Link>
              <Link to="/prep/aptitude">Aptitude</Link>
            </div>
          </div> */}

          {/* <a href="#">Courses</a>
          <a href="#">All Companies</a>
          <Link to="/dashboard/active">Active Courses</Link>
          <a href="#">Campuses</a> */}

        </nav>

        {/* Right Side */}
        <div className="nav-right">
          <button className="signin-btn">Sign In</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;