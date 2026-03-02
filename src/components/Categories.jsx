import React from "react";
import "./Categories.css";
import { FaCode, FaBrain, FaLightbulb } from "react-icons/fa";

function Categories() {
  return (
    <section className="categories">
      <div className="categories-container">

        {/* Section Title */}
        <h2 className="category-title">Mock Test Categories</h2>

        <p className="category-subtitle">
          Prepare with industry-standard mock tests designed by experts 
          from top companies.
        </p>

        {/* Cards */}
        <div className="card-container">

          {/* Card 1 */}
          <div className="category-card">
            <div className="icon-box coding">
              <FaCode />
            </div>

            <h3>Coding Mock Test</h3>

            <p>
              Practice company-level coding questions with real exam patterns.
              Timed challenges across DSA, OOP, and system design.
            </p>

            <span className="get-started">Get Started →</span>
          </div>

          {/* Card 2 */}
          <div className="category-card">
            <div className="icon-box aptitude">
              <FaBrain />
            </div>

            <h3>Aptitude Mock Test</h3>

            <p>
              Improve quantitative and logical aptitude with timed tests.
              Covers number systems, probability, permutations & more.
            </p>

            <span className="get-started">Get Started →</span>
          </div>

          {/* Card 3 */}
          <div className="category-card">
            <div className="icon-box reasoning">
              <FaLightbulb />
            </div>

            <h3>Reasoning Mock Test</h3>

            <p>
              Master reasoning topics asked in top placement exams.
              Logical, verbal & analytical reasoning with detailed solutions.
            </p>

            <span className="get-started">Get Started →</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Categories;