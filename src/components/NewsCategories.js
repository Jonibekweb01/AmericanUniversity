import React from 'react';
import './NewsCategories.css'; // Create this CSS file for news categories-specific styles

const NewsCategories = () => (
  <section className="categories">
    <div className="container">
      <h2>News Categories</h2>
      <div className="category-list">
        <div className="category">
          <img
            src="https://www.american.edu/about/images/new-admit-steps.jpg"
            alt="Admissions"
          />
          <h3>Admissions</h3>
        </div>
        <div className="category">
          <img
            src="https://www.american.edu/ucm/images/homepage-3.jpg"
            alt="Campus Life"
          />
          <h3>Campus Life</h3>
        </div>
        <div className="category">
          <img
            src="https://www.american.edu/ucm/images/homepage-4.jpg"
            alt="Research"
          />
          <h3>Research</h3>
        </div>
        <div className="category">
          <img
            src="https://www.american.edu/ucm/images/OoS-Homepage-Element-Bees_5726945_952x844.jpg"
            alt="Events"
          />
          <h3>Events</h3>
        </div>
      </div>
    </div>
  </section>
);

export default NewsCategories;
