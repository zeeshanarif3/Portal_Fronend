import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FaGraduationCap, FaShoppingCart } from "react-icons/fa";


export default function Sidebar() {
  return (
    <div className="sidebar">
              {/* Logo */}
              <a href="/dashboard/active" className="logo">
                <FaGraduationCap className="logo-icon" />
                <span className="logo-text">Tech Mars</span>
              </a>

      <div className="menu">
        <p className="menu-title">Courses</p>

        <NavLink to="/dashboard/active" className="menu-item">
          Active Courses
        </NavLink>

        <NavLink to="/dashboard/archived" className="menu-item">
          Archived Courses
        </NavLink>

        <p className="menu-title">Others</p>

        <NavLink to="/dashboard/bookmarks" className="menu-item">
          Bookmarks
        </NavLink>

        <NavLink to="/dashboard/community" className="menu-item">
          Community
        </NavLink>
      </div>
    </div>
  );
}