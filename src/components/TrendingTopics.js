import React from 'react';
import './TrendingTopics.css'; // Create this CSS file for trending topics-specific styles

const TrendingTopics = () => (
  <section className="trending-topics">
    <div className="container">
      <h2>Trending Topics</h2>
      <div className="topics">
        <div className="topic">
          <img
            src="https://www.american.edu/sis/news/images/A-TOP-10-SCHOOL_5589884_600x315.jpg"
            alt="Top School"
          />
          <h3>Top 10 School Rankings</h3>
          <p>Discover why we are ranked among the top schools nationwide.</p>
        </div>
        <div className="topic">
          <img
            src="https://www.american.edu/news/images/DV2A0574-2_5589884_600x315.jpg"
            alt="Top School"
          />
          <h3>Top 10 School Rankings</h3>
          <p>Discover why we are ranked among the top schools nationwide.</p>
        </div>
      </div>
    </div>
  </section>
);

export default TrendingTopics;
