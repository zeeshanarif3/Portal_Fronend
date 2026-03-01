import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomeLandingPage from "./components/Landing_Page/HomeLandingPage";
import Layout from "./components/Student Dashboard/Dashboardlayout/Layout";
import ActiveCourses from "./components/Student Dashboard/ActiveCourses";
import CourseSidebar from "./components/StudentCourse_Dashboard/CourseSidebar";
import CourseDetails from "./components/StudentCourse_Dashboard/CourseDetails/CourseDetails";
import StudentCourseLayout from "./components/StudentCourse_Dashboard/StudentCourseLayoutdet";
import Quiz from "./components/StudentCourse_Dashboard/Quiz/Quiz";
import PdfViewer from "./components/StudentCourse_Dashboard/PDFPage/Pdfviewers";
import TableOfContent from "./components/StudentCourse_Dashboard/TableOfContent/tableofcontent";

import "./App.css"


function App() {
  
  return (
    // <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<HomeLandingPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Layout />}>
          <Route path="active" element={<ActiveCourses />} />
        </Route>

  {/* <Route path="/course" element={<CourseSidebar />}>
  <Route path="instructions" element={<CourseDetails />} />
  </Route> */}

{/* <Route path="/course" element={<CourseSidebar />}>
  <Route index element={<CourseDetails />} />
   <Route path="details" element={<CourseDetails />} />
</Route> */}


<Route path="/course" element={<StudentCourseLayout />}>

  {/* Auto open details */}
   <Route index element={<Navigate to="table-of-content" />} />
   <Route path="table-of-content" element={<TableOfContent />} />
  {/* <Route index element={<Navigate to="details" />} /> */}

 <Route path="details" element={<CourseDetails />} />
  <Route path="details/quiz" element={<Quiz />} />
  <Route path="pdf-view" element={<PdfViewer />} />

</Route>

  {/* <Route path="quant" element={<Quant />} />
  <Route path="reasoning" element={<Reasoning />} /> */}


      </Routes>
    // </BrowserRouter>
  );
}

export default App;