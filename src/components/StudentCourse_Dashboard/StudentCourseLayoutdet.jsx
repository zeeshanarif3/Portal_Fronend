// import { Outlet } from "react-router-dom";
// import StudentCourseSidebar from "./CourseSidebar";

// export default function StudentCourseLayout() {
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
      
//       {/* LEFT SIDE */}
//       <StudentCourseSidebar />

//       {/* RIGHT SIDE */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         <Outlet />
//       </div>

//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import StudentCourseSidebar from "./CourseSidebar";
import Header from "./Header/Header";

export default function StudentCourseLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* LEFT SIDE */}
      <StudentCourseSidebar />

      {/* RIGHT SIDE */}
      <div 
        style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column" 
        }}
      >

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div 
          style={{ 
            flex: 1, 
            overflowY: "auto", 
            padding: "20px",
            background: "#f3f4f6"
          }}
        >
          <Outlet />
        </div>

      </div>
    </div>
  );
}