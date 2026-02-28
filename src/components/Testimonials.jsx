import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      text: "PrepMaster’s mock tests were exactly like real placement exams. The detailed feedback helped me improve rapidly.",
      name: "Rahul Sharma",
      company: "Placed at Accenture",
      rating: 5,
    },
    {
      text: "The aptitude and reasoning courses are phenomenal. I cleared the TCS NQT in my first attempt!",
      name: "Priya Desai",
      company: "Placed at TCS",
      rating: 5,
    },
    {
      text: "24/7 support and live mentorship sessions gave me the confidence to crack my dream company.",
      name: "Amit Verma",
      company: "Placed at Infosys",
      rating: 4,
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">
          Ready to Crack Your Dream Job?
        </h2>

        <p className="testimonial-subtitle">
          Hear from students who transformed their careers with PrepMaster.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "star active" : "star"}
                  />
                ))}
              </div>

              <p className="testimonial-text">"{item.text}"</p>

              <div className="testimonial-user">
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;