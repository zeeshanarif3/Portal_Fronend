import React from "react";
import "./Footer.css";
import { FaGraduationCap, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Grid */}
        <div className="footer-grid">

          {/* Support */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>About Us</li>
              <li>Refund Policy</li>
              <li>Terms of Use</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          {/* Companies */}
          <div className="footer-column">
            <h3>Companies</h3>
            <ul>
              <li>Accenture</li>
              <li>TCS</li>
              <li>Infosys</li>
              <li>CapGemini</li>
            </ul>
          </div>

          {/* Exam Dashboards */}
          <div className="footer-column">
            <h3>Exam Dashboards</h3>
            <ul>
              <li>CoCubes Dashboard</li>
              <li>eLitmus Dashboard</li>
              <li>HirePro Dashboard</li>
              <li>MeriTrac Dashboard</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <ul className="contact-list">
              <li><FaEnvelope /> support@prepmaster.com</li>
              <li><FaPhone /> +91 93456 78901</li>
              <li><FaCommentDots /> Text us on WhatsApp</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <FaGraduationCap className="logo-icon" />
            <span>PrepMaster</span>
          </div>

          <p>
            Copyright © 2026 · PrepMaster · All rights reserved · Contact Us
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;