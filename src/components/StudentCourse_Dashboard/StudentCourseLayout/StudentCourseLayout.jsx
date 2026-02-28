import { Outlet } from "react-router-dom";
import CourseSidebar from "./CourseSidebar";

export default function StudentCourseLayout() {
  return (
    <div style={{ display: "flex" }}>
      <CourseSidebar />

      <div style={{ flex: 1 }}>
        <Outlet />   {/* ❗ Ye hona zaruri hai */}
      </div>
    </div>
  );
}