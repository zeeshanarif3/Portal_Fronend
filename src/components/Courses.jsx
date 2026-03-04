import React from "react";
import "./Courses.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const courses = [
  {
    title: "TCS NQT",
    price: "199",
    badge: "Bestseller",
    letter: "F",
  },
  {
    title: "Accenture Mock",
    price: "200",
    badge: "Trending",
    letter: "D",
  },
  {
    title: "Infosys Mock",
    price: "149",
    badge: "",
    letter: "S",
  },
  {
    title: "Capgemini Mock",
    price: "179",
    badge: "Popular",
    letter: "A",
  },
  {
    title: "SQL & Database Management",
    price: "199",
    badge: "",
    letter: "P",
  },
  {
    title: "All MNSc Interview Series",
    price: "99",
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

                {/* <div className="rating">
                  <FaStar className="star" />
                  <span>{course.rating}</span>
                  <span className="students">
                    • {course.students} students
                  </span>
                </div> */}

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