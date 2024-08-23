import React from 'react';
import './HeroSection.css'; // Create this CSS file for hero-specific styles

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to Our University</h1>
      <p>Discover our programs, research, and vibrant community.</p>
      <a href="#" className="cta-button">Learn More</a>
    </div>
    <video autoplay muted loop>
      <source
        src="https://cloudfront.american.edu/videos/ucm/AU_Challenge%20Accepted_60_noaudio.mp4"
        type="video/mp4"
      />
    </video>
  </section>
);

export default HeroSection;
