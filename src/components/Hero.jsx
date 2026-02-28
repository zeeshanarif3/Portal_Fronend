import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">Trusted by 10,000+ Students</div>

        <h1>
          Your Gateway to <br />
          <span>Professional Success:</span> <br />
          Crack Jobs
        </h1>

        <p className="hero-desc">
          With Over 5 Years of Experience, Your Trusted Partner in Placements.
          Master coding, aptitude, and reasoning with expert-curated content.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Courses →
          </button>
          <button className="secondary-btn"></button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt="team"
        />
      </div>
    </section>
  );
}

export default Hero;