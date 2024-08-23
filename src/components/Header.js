import React from "react";
import "./Header.css"; // Create this CSS file for header-specific styles

const Header = () => (
  <header>
    <div className="container">
      <div className="header__inner">
        <img
          src="https://cloudfront.american.edu/assets/crest-logotype.svg"
          alt="University Logo"
          className="logo"
        />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Admissions</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
