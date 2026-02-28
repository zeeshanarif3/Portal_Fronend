import React from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <FaArrowLeft className="icon" />
        <FaBars className="icon" />
        <h2 className="header-title">
          All in One (Mock Test for all assessments)
        </h2>
      </div>

      <div className="header-right">
        <span className="discussion">Discuss (0)</span>
        <button className="complete-btn">
          Complete and Continue →
        </button>
      </div>
    </div>
  );
};

export default Header;