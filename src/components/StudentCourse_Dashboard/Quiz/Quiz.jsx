// import { useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./Quiz.css";

// export default function Quiz() {

//   const examRef = useRef(null);
//   const location = useLocation();

//   // Auto fullscreen when coming from Start Quiz
//   useEffect(() => {
//     if (location.state?.fullscreen && examRef.current) {
//       examRef.current.requestFullscreen().catch(() => {});
//     }
//   }, [location]);

//   const handleFullScreen = () => {
//     if (!examRef.current) return;

//     if (!document.fullscreenElement) {
//       examRef.current.requestFullscreen().catch(() => {});
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   return (
//     <div className="exam-wrapper" ref={examRef}>

//       {/* ================= TOP ================= */}
//       <div className="exam-top">
//         <h2>TCS Part-A Logical</h2>

//         <div className="exam-top-right">
//           <span className="marks">
//             Marks for correct response:
//             <span className="green-text"> 1.00 </span>|
//             Negative marking:
//             <span className="red-text"> 0.00</span>
//           </span>

//           <span className="timer">
//             Remaining Time: 00:24:38
//           </span>

//           <span onClick={handleFullScreen} className="fullscreen-btn">
//             ⛶
//           </span>
//         </div>
//       </div>

//       {/* ================= BODY ================= */}
//       <div className="exam-body">

//         {/* LEFT PANEL (SCROLLABLE) */}
//         <div className="exam-left">

//           <h4>Question 1</h4>

//           <p className="question-text">
//             Study the following pie-chart and table carefully to answer the question below:
//           </p>

//           <img
//             src="https://via.placeholder.com/500x300"
//             alt="chart"
//             className="question-image"
//           />

//           <p className="question-text">
//             What is the difference between the total number of lecturers
//             (both male and female) in Zoology and the total number of
//             male lecturers in Chemistry and Education together?
//           </p>

//           <div className="options">
//             <label><input type="radio" name="q1" /> 192</label>
//             <label><input type="radio" name="q1" /> 182</label>
//             <label><input type="radio" name="q1" /> 146</label>
//             <label><input type="radio" name="q1" /> 136</label>
//           </div>

//         </div>

//         {/* RIGHT PANEL */}
//         <div className="exam-right">

//           {/* STATUS */}
//           <div className="status-panel">

//             <div className="status-item">
//               <div className="badge green">0</div>
//               <span>Answered</span>
//             </div>

//             <div className="status-item">
//               <div className="badge red">1</div>
//               <span>Not Answered</span>
//             </div>

//             <div className="status-item">
//               <div className="badge gray">18</div>
//               <span>Not Visited</span>
//             </div>

//             <div className="status-item">
//               <div className="badge purple">0</div>
//               <span>Marked for Review</span>
//             </div>

//             <div className="status-item full">
//               <div className="badge purple">0</div>
//               <span>
//                 Answered & Marked for Review (will be considered for evaluation)
//               </span>
              
//             </div>

//           </div>

//           <h4>Choose a Question</h4>

//           <div className="question-grid">
//             {[...Array(40)].map((_, i) => (
//               <div
//                 key={i}
//                 className={`question-number ${i === 0 ? "active" : ""}`}
//               >
//                 {i + 1}
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* ================= FOOTER ================= */}
//       <div className="exam-footer">
//         <button className="mark-btn">Mark for Review & Next</button>
//         <button className="clear-btn">Clear Response</button>
//         <button className="save-btn">Save & Next</button>
//         <button className="submit-btn">Submit</button>
//       </div>

//     </div>
//   );
// }

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import img from "../../../assests/5.jpg"
import "./Quiz.css";

export default function Quiz() {
  const examRef = useRef(null);
  const location = useLocation();
  const totalQuestions = 40;

  // Auto fullscreen when coming from Start Quiz
  useEffect(() => {
    if (location.state?.fullscreen && examRef.current) {
      examRef.current.requestFullscreen().catch(() => {});
    }
  }, [location]);

  // Manual fullscreen toggle
  const handleFullScreen = () => {
    if (!examRef.current) return;

    if (!document.fullscreenElement) {
      examRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="exam-wrapper" ref={examRef}>
      {/* ================= TOP ================= */}
      <div className="exam-top">
        <h2>TCS Part-A Logical</h2>

        <div className="exam-top-right">
          <span className="marks">
            Marks for correct response:
            <span className="green-text"> 1.00 </span>|
            Negative marking:
            <span className="red-text"> 0.00</span>
          </span>

          <span className="timer">Remaining Time: 00:24:38</span>

          <span onClick={handleFullScreen} className="fullscreen-btn">
            ⛶
          </span>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="exam-body">
        {/* LEFT PANEL (SCROLLABLE) */}
        <div className="exam-left">
          <h4>Question 1</h4>

          <p className="question-text">
            Study the following pie-chart carefully and answer the question below:
          </p>

          {/* IMAGE IMPLEMENTED HERE */}
          {/* <img
            src={img}
            alt="Pie Chart"
            className="question-image"
          /> */}

          <p className="question-text">
            What percentage of lecturers belong to Zoology?
          </p>

          <div className="options">
            <label><input type="radio" name="q1" /> 22%</label>
            <label><input type="radio" name="q1" /> 18%</label>
            <label><input type="radio" name="q1" /> 14%</label>
            <label><input type="radio" name="q1" /> 13%</label>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="exam-right">
          {/* STATUS PANEL */}
          <div className="status-panel">
            <div className="status-item">
              <div className="badge green">0</div>
              <span>Answered</span>
            </div>

            <div className="status-item">
              <div className="badge red">1</div>
              <span>Not Answered</span>
            </div>

            <div className="status-item">
              <div className="badge gray">38</div>
              <span>Not Visited</span>
            </div>

            <div className="status-item">
              <div className="badge purple">0</div>
              <span>Marked for Review</span>
            </div>

            <div className="status-item full">
              <div className="badge purple">0</div>
              <span>
                Answered & Marked for Review (will be considered for evaluation)
              </span>
            </div>
          </div>

          <h4>Choose a Question</h4>

          {/* SCROLLABLE QUESTION GRID */}
          <div className="question-grid">
            {[...Array(totalQuestions)].map((_, i) => (
              <div
                key={i}
                className={`question-number ${i === 0 ? "active" : ""}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="exam-footer">
        <button className="mark-btn">Mark for Review & Next</button>
        <button className="clear-btn">Clear Response</button>
        <button className="save-btn">Save & Next</button>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}