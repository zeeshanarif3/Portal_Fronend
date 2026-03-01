import { useNavigate } from "react-router-dom";
import "./tableofcontent.css";

export default function TableOfContent() {
  const navigate = useNavigate();

  return (
    <div className="toc-wrapper">

      {/* TOP IMAGE */}
      <div className="toc-image">
        <img
          src="https://via.placeholder.com/900x250?text=Course+Overview"
          alt="TOC"
        />
      </div>

      {/* CONTENT */}
      <div className="toc-box">
        <h2>Table of Content</h2>

        <ul>
          <li >
            1. Course Details
          </li>

          <li >
            2. Numeric Puzzles (PDF)
          </li>

          <li>
            3. Quantitative Mock
          </li>

          <li>
            4. Reasoning Mock
          </li>

          <li>
            5. Verbal Mock
          </li>
        </ul>
      </div>

    </div>
  );
}