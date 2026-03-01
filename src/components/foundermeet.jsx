import React from "react";
import "./founder.css";
import founderImg from "../assests/founder2.png"; // apni image yaha rakho

export default function AboutFounder() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">
          <p className="section-tag">Who We Are</p>

          <h1>
            Meet <span>Zeeshan</span><br />
            Founder of Prep Mars
          </h1>

          <p className="about-description">
            Zeeshan is the founder of <strong>Prep Mars</strong>, dedicated to
            placement preparation and career growth. He has delivered placement
            sessions in more than 20 colleges and mentored over 5000 students.
          </p>

          <ul className="about-points">
            <li>Delivered placement sessions in 20+ colleges</li>
            <li>Mentored 5000+ students</li>
            <li>On-Campus Placement Preparation</li>
            <li>Off-Campus Job Preparation</li>
            <li>Resume & Interview Preparation</li>
            <li>Complete Career Guidance</li>
          </ul>

          <p className="tagline">
            Empowering students to achieve their dream placements.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src={founderImg} alt="Zeeshan Founder Prep Mars" />
        </div>

      </div>
    </section>
  );
}