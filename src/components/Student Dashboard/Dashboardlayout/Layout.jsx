import { Outlet } from "react-router-dom";
import Sidebar from "./outlet/Sidebar";
import "./Layout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
}