import React from "react";
import "./Courses.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    rating: "4.8",
    students: "2.1k",
    price: "4,999",
    badge: "Bestseller",
    letter: "F",
  },
  {
    title: "Data Structures & Algorithms",
    rating: "4.9",
    students: "3.4k",
    price: "3,499",
    badge: "Trending",
    letter: "D",
  },
  {
    title: "System Design Masterclass",
    rating: "4.7",
    students: "1.8k",
    price: "5,999",
    badge: "",
    letter: "S",
  },
  {
    title: "Aptitude & Reasoning Complete",
    rating: "4.6",
    students: "4.2k",
    price: "1,999",
    badge: "Popular",
    letter: "A",
  },
  {
    title: "Python for Placements",
    rating: "4.8",
    students: "2.7k",
    price: "2,499",
    badge: "",
    letter: "P",
  },
  {
    title: "SQL & Database Management",
    rating: "4.5",
    students: "1.5k",
    price: "2,999",
    badge: "",
    letter: "S",
  },

];

function Courses() {
  return (
    <section className="courses">
      <div className="courses-container">
        <h2 className="course-title">Top Courses</h2>

        <p className="course-subtitle">
          Industry-relevant courses crafted by professionals from leading tech companies.
        </p>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="image-box">
                {/* {course.badge && (
                  <span className="badge">{course.badge}</span>
                )} */}
                <span className="letter">{course.letter}</span>
              </div>

              <div className="card-content">
                <h3>{course.title}</h3>

                <div className="rating">
                  <FaStar className="star" />
                  <span>{course.rating}</span>
                  <span className="students">
                    • {course.students} students
                  </span>
                </div>

                <div className="price-row">
                  <h4>₹{course.price}</h4>

                  <button className="buy-btn">
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="show-more">Show More Courses</button>
      </div>
    </section>
  );
}

export default Courses;