import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewsCategories from './components/NewsCategories';
import FeaturedStories from './components/FeaturedStories';
import TrendingTopics from './components/TrendingTopics';
import Footer from './components/Footer';
import './styles.css'; // Import global styles

const App = () => (
  <div>
    <Header />
    <HeroSection />
    <NewsCategories />
    <FeaturedStories />
    <TrendingTopics />
    <Footer />
  </div>
);

export default App;
