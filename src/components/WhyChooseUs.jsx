import React from "react";
import "./WhyChooseUs.css";
import { FaCheckCircle } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    "Company Pattern Based",
    "Detailed Feedback",
    "Live Mentorship",
    "Industry Expert Instructors",
    "24/7 Support",
    "Placement Assistance",
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us?</h2>

        <p className="why-subtitle">
          We go beyond traditional test prep — our platform is built to get you placed.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <FaCheckCircle className="check-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;