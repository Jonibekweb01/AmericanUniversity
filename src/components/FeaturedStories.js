import React from "react";
import "./FeaturesStories.css"; // Create this CSS file for featured stories-specific styles

const FeaturedStories = () => (
  <section className="featured-stories">
    <div className="container">
      <h2>Featured Stories</h2>
      <div className="stories">
        <article>
          <img
            src="https://www.american.edu/ucm/images/D06_265_076a-EL-Edit.jpg"
            alt="Story 1"
          />
          <h3>Exciting New Developments</h3>
          <p>
            Learn about the latest advancements and initiatives at our
            university.
          </p>
        </article>
        <article>
          <img
            src="https://www.american.edu/news/images/Screenshot-2024-08-20-at-11_5589884_600x315.jpg"
            alt="Story 2"
          />
          <h3>Student Achievements</h3>
          <p>Read about the remarkable accomplishments of our students.</p>
        </article>
        <article>
          <img
            src="https://www.american.edu/news/images/DV2A0574-2_5589884_600x315.jpg"
            alt="Story 3"
          />
          <h3>Research Breakthroughs</h3>
          <p>
            Explore the groundbreaking research conducted by our faculty and
            students.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default FeaturedStories;
