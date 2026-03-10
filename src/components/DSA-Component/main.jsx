import React from "react";
import "./main.css";
// import { FaCode, FaTrophy, FaBullseye, FaChartLine } from "react-icons/fa";
import { FaCode, FaTrophy, FaBullseye, FaChartLine } from "react-icons/fa";
import Navbar from "../DSA-Component/navbar";
import { Link } from "react-router-dom";


function Main() {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className="main-container">

                {/* Hero Section */}
                <div className="hero-section">
                    <h1>Master Data Structures & Algorithms</h1>

                    <p>
                        A curated collection of essential DSA problems to ace your coding interviews
                    </p>

                    {/* <button className="start-btn">
            <FaCode /> Start DSA Sheet
          </button> */}
                    <Link to="/prep/dsa/ques">
                        <button className="start-btn">
                            <FaCode /> Start DSA Sheet
                        </button>
                    </Link>
                </div>

                {/* Cards */}
                <div className="cards">

                    <div className="card">
                        <FaTrophy className="card-icon" />
                        <h3>Track Progress</h3>
                        <p>
                            Monitor your completion across all difficulty levels
                        </p>
                    </div>

                    <div className="card">
                        <FaBullseye className="card-icon" />
                        <h3>Organized Topics</h3>
                        <p>
                            Problems categorized by data structures and algorithms
                        </p>
                    </div>

                    <div className="card">
                        <FaChartLine className="card-icon" />
                        <h3>LeetCode Links</h3>
                        <p>
                            Direct links to practice problems on LeetCode
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Main;