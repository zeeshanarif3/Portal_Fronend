// import "./ActiveCourses.css";

// export default function ActiveCourses() {
//   return (
//     <div className="main">
//       <h2 className="page-title">Active Courses</h2>

//       <div className="search-box">
//         <input type="text" placeholder="Search for a chapter, course or package" />
//         <span>🔍</span>
//       </div>

//       <div className="course-grid">
//         <div className="course-card">
//           <img src="https://via.placeholder.com/400x200" alt="course" />
//           <div className="card-content">
//             <h4>TCS NQT Mock Test</h4>
//             <p>Prafull</p>

//             <div className="progress-bar">
//               <div className="progress" style={{ width: "30%" }}></div>
//             </div>

//             <button className="start-btn">Start Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./ActiveCourses.css";
import tcsicon from "../../assests/tcsion.jpg"
import { useNavigate } from "react-router-dom";

export default function ActiveCourses() {

  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/course");   // 👈 yaha redirect hoga
  };

  return (
    <div className="active-wrapper">

      {/* Top Header Strip */}
      <div className="active-topbar">
        <h2>Active Courses</h2>
      </div>

      {/* Page Content */}
      <div className="active-content">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a chapter, course or package"
          />
          <span>🔍</span>
        </div>

        <div className="course-grid">
          <div className="course-card">
            <img src={tcsicon} alt="course" />
            <div className="card-content">
              <h4>TCS NQT Mock Test</h4>
              <p>Prafull</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: "30%" }}></div>
              </div>

              {/* <button className="start-btn">Start Now</button> */}
              <button className="start-btn" onClick={handleStart}>
                Start Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}