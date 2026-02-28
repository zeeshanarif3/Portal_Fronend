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


    const goToDetails = () => {
        navigate("/course/details");
    };


    return (
        <div className="sc-sidebar">

            {/* ===== FIXED TOP ===== */}
            <div className="sc-fixed">

                <div className="sc-top">
                    <FaArrowLeft className="back-icon" />
                </div>

                <div className="sc-progress">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: "2%" }}></div>
                    </div>
                    <p>2% completed in 2h 53m</p>
                </div>

                <div className="sc-discussion" onClick={goToDetails}>
                    💬 Course Details
                </div>

            </div>

            {/* ===== SCROLLABLE CONTENT ===== */}
            <div className="sc-scroll">

                {/* Instructions */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("instructions")}
                    >
                        {openSection === "instructions" ? <FaChevronDown /> : <FaChevronRight />}
                        Instructions
                    </div>
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
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("tcs")}
                    >
                        {openSection === "tcs" ? <FaChevronDown /> : <FaChevronRight />}
                        TCS (Mock)
                    </div>

                    {openSection === "tcs" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Mock 1</NavLink>
                            <NavLink to="#" className="sc-link">Mock 2</NavLink>
                        </div>
                    )}
                </div>

                {/* wipro */}
                <div className="sc-section">
                    <div
                        className="sc-section-title"
                        onClick={() => toggleSection("wipro")}
                    >
                        {openSection === "wipro" ? <FaChevronDown /> : <FaChevronRight />}
                        Wipro (Mock)
                    </div>

                    {openSection === "wipro" && (
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
                        onClick={() => toggleSection("infosys")}
                    >
                        {openSection === "infosys" ? <FaChevronDown /> : <FaChevronRight />}
                        Infosys (Mock)
                    </div>

                    {openSection === "infosys" && (
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
                        onClick={() => toggleSection("accenture")}
                    >
                        {openSection === "accenture" ? <FaChevronDown /> : <FaChevronRight />}
                        Accenture (Mock)
                    </div>

                    {openSection === "accenture" && (
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
                        onClick={() => toggleSection("capgemini")}
                    >
                        {openSection === "capgemini" ? <FaChevronDown /> : <FaChevronRight />}
                        Capgemini (Mock)
                    </div>

                    {openSection === "capgemini" && (
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
                        onClick={() => toggleSection("cognizant")}
                    >
                        {openSection === "cognizant" ? <FaChevronDown /> : <FaChevronRight />}
                        Cognizant (Mock)
                    </div>

                    {openSection === "cognizant" && (
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
                        onClick={() => toggleSection("deloitte")}
                    >
                        {openSection === "deloitte" ? <FaChevronDown /> : <FaChevronRight />}
                        Deloitte (Mock)
                    </div>

                    {openSection === "deloitte" && (
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
                        onClick={() => toggleSection("hcl")}
                    >
                        {openSection === "hcl" ? <FaChevronDown /> : <FaChevronRight />}
                        HCL (Mock)
                    </div>

                    {openSection === "hcl" && (
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
                        onClick={() => toggleSection("techmahindra")}
                    >
                        {openSection === "techmahindra" ? <FaChevronDown /> : <FaChevronRight />}
                        Tech Mahindra (Mock)
                    </div>

                    {openSection === "techmahindra" && (
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
                        onClick={() => toggleSection("verbal")}
                    >
                        {openSection === "verbal" ? <FaChevronDown /> : <FaChevronRight />}
                        Verbal (Mock)
                    </div>

                    {openSection === "verbal" && (
                        <div className="sc-subitems">
                            <NavLink to="#" className="sc-link">Part A</NavLink>
                            <NavLink to="#" className="sc-link">Part B</NavLink>
                        </div>
                    )}
                </div>


                {/* Static Items Example */}
                <div className="sc-section-title">Reading Paragraph</div>
                <div className="sc-section-title">Numeric Puzzles</div>
                <div className="sc-section-title">Gamified Assessment</div>
                <div className="sc-section-title">Pseudocodes</div>

            </div>
        </div>
    );
}