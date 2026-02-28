import "./CourseDetails.css";
import verbalImg from "../../../assests/verbal.png"; // apni image lagao
import { useNavigate } from "react-router-dom";

export default function CourseDetails() {
   const navigate = useNavigate();
  return (
    <div className="course-details-wrapper">

      <div className="course-details-card">

        {/* LEFT CONTENT */}
        <div className="details-left">
          <h2>TCS Part-A Verbal</h2>

          <div className="details-meta">
            <p>📄 25 Questions</p>
            <p>⏱ 25 Minutes</p>
          </div>

          {/* <button className="start-quiz-btn">
            Start Quiz
          </button> */}
           <button
            className="start-quiz-btn"
            // onClick={() => navigate("quiz")}
              onClick={() => navigate("quiz", { state: { fullscreen: true } })}
          >
            Start Quiz
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="details-right">
          <img src={verbalImg} alt="verbal" />
        </div>

      </div>

    </div>
  );
}