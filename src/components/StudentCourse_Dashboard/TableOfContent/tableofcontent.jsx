import "./tableofcontent.css";
import tocImage from "../../../assests/TOCQ.jpg"; // 👈 apni image yaha import karo

export default function TableOfContent() {
  return (
    <div className="toc-wrapper">

      {/* ===== TOP IMAGE ===== */}
      <div className="toc-image">
        <img src={tocImage} alt="Table of Content" />
      </div>

      {/* ===== CONTENT BOX ===== */}
      {/* <div className="toc-box">
        <h2>Table of Content</h2>

        <ul>
          <li>1. Course Details</li>
          <li>2. Numeric Puzzles (PDF)</li>
          <li>3. Quantitative Mock</li>
          <li>4. Reasoning Mock</li>
          <li>5. Verbal Mock</li>
        </ul>
      </div> */}

    </div>
  );
}