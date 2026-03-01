import { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./CourseSidebar.css";
import { FaChevronRight, FaChevronDown, FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function StudentCourseSidebar() {

    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    

    // const goToDetails = () => {
    //     navigate("/course/details");
    // };


    return (
        <div className="sc-sidebar">

            {/* ===== FIXED TOP ===== */}
            <div className="sc-fixed">

                <div className="sc-top">
                    <FaArrowLeft className="back-icon" 
                    onClick={() => navigate("/dashboard/active")}
                    />
                </div>

                <div className="sc-progress">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: "2%" }}></div>
                    </div>
                    <p>2% completed in 2h 53m</p>
                </div>

                <div className="sc-discussion">
                    💬 Course Details
                </div>

            </div>

            {/* ===== SCROLLABLE CONTENT ===== */}
            <div className="sc-scroll">

                {/* Instructions */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("tableofcontent")}
                    >
                        {openSection === "quant" ? <FaChevronDown /> : <FaChevronRight />}
                        Table of Content
                    </div>

                    {openSection === "tableofcontent" && (
                        <div className="sc-subitems">
                            <NavLink to="table-of-content" className="sc-link">Total Questions & content</NavLink>
                            {/* <NavLink to="#" className="sc-link">Mock 2</NavLink> */}
                        </div>
                    )}
                </div>

                {/* Quant */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("quant")}
                    >
                        {openSection === "quant" ? <FaChevronDown /> : <FaChevronRight />}
                        Quantitative (Mock)
                    </div>

                    {openSection === "quant" && (
                        <div className="sc-subitems">
                            <NavLink to="pdf-view" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("reasoning")}
                    >
                        {openSection === "reasoning" ? <FaChevronDown /> : <FaChevronRight />}
                        Reasoning (Mock)
                    </div>

                    {openSection === "reasoning" && (
                        <div className="sc-subitems">
                            <NavLink to="details" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>

                {/* wipro */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("verbal")}
                    >
                        {openSection === "verbal" ? <FaChevronDown /> : <FaChevronRight />}
                        Verbal (Mock)
                    </div>

                    {openSection === "verbal" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>
                {/* Infosys */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("readingpara")}
                    >
                        {openSection === "readingpara" ? <FaChevronDown /> : <FaChevronRight />}
                        Reading Paragraph
                    </div>

                    {openSection === "readingpara" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* Accenture */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("numericpuzzles")}
                    >
                        {openSection === "numericpuzzles" ? <FaChevronDown /> : <FaChevronRight />}
                        Numeric Puzzles
                    </div>

                    {openSection === "numericpuzzles" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* Capgemini */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("gamebased")}
                    >
                        {openSection === "gamebased" ? <FaChevronDown /> : <FaChevronRight />}
                        Game Based Mock
                    </div>

                    {openSection === "gamebased" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* Cognizant */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("pseudocodes")}
                    >
                        {openSection === "pseudocodes" ? <FaChevronDown /> : <FaChevronRight />}
                        Pseudocodes
                    </div>

                    {openSection === "pseudocodes" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* Deloitte */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("dsa")}
                    >
                        {openSection === "dsa" ? <FaChevronDown /> : <FaChevronRight />}
                        DSA Mock
                    </div>

                    {openSection === "dsa" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* HCL */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("csfundamental")}
                    >
                        {openSection === "csfundamental" ? <FaChevronDown /> : <FaChevronRight />}
                        CS Fundamentals
                    </div>

                    {openSection === "csfundamental" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* Tech Mahindra */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("SQL")}
                    >
                        {openSection === "SQL" ? <FaChevronDown /> : <FaChevronRight />}
                        SQL
                    </div>

                    {openSection === "SQL" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>


                {/* Verbal */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("webdev")}
                    >
                        {openSection === "webdev" ? <FaChevronDown /> : <FaChevronRight />}
                        Web Development
                    </div>

                    {openSection === "webdev" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Part A</NavLink>
                            <NavLink to="#" className="sc-link">Part B</NavLink>
                        </div>
                    )}
                </div>

                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("codingques")}
                    >
                        {openSection === "codingques" ? <FaChevronDown /> : <FaChevronRight />}
                        Coding Questions
                    </div>

                    {openSection === "codingques" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Part A</NavLink>
                            <NavLink to="#" className="sc-link">Part B</NavLink>
                        </div>
                    )}
                </div>


                {/* Static Items Example */}
                {/* <div className="sc-section-title">Reading Paragraph</div>
                <div className="sc-section-title">Numeric Puzzles</div>
                <div className="sc-section-title">Gamified Assessment</div>
                <div className="sc-section-title">Pseudocodes</div> */}

            </div>
        </div>
    );
}