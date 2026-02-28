// import React from "react";
// import "./Navbar.css";
// import { FaGraduationCap, FaShoppingCart } from "react-icons/fa";

// function Navbar() {
//   return (
//     <div className="navbar">
//       {/* <div className="logo">PrepMaster</div> */}

//          {/* Logo */}
//         <a href="/" className="logo">
//           <FaGraduationCap className="logo-icon" />
//           <span className="logo-text">PrepMaster</span>
//         </a>

//       <div className="nav-links">
//         <a href="#">Preparation</a>
//         <a href="#">Courses</a>
//         <a href="#">All Companies</a>
//       </div>

//       <button className="signin-btn">Sign In</button>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import "./Navbar.css";
import { FaGraduationCap, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="/" className="logo">
          <FaGraduationCap className="logo-icon" />
          <span className="logo-text">Tech Mars</span>
        </a>

        {/* Center Links */}
        <nav className="nav-links">
          <a href="#">Preparation</a>
          <a href="#">Courses</a>
          <a href="#">All Companies</a>
           {/* <a href="#">Active Courses</a> */}
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