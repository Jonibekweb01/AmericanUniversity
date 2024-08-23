import React from "react";
import "./Footer.css"; // Create this CSS file for footer-specific styles

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
