import React from 'react';
import '../style.css';

const TimelineItem = ({ year, text }) => (
  <div className="timeline-item">
    <div className="timeline-year">{year}</div>
    <div className="timeline-content">
      <p>{text}</p>
    </div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const HeroSection = () => {
  const timelineData = [
    { year: 2024, text: "Expanding presence in North America and UK with expert teams" },
    { year: 2023, text: "Introduced AI, cloud, and DevOps solutions" },
    { year: 2022, text: "Expanded team and moved to new office" },
    { year: 2021, text: "Grew to 40+ developers" },
    { year: 2020, text: "20-30 developers, 10+ projects" },
    { year: 2019, text: "Registered as Bluebash Consulting Private Limited" },
    { year: 2018, text: "Founded Bluebash" }
  ];

  const features = [
    {
      title: "Innovation First",
      description: "Cutting-edge solutions in AI, Cloud, and DevOps"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered solutions since 2014"
    },
    {
      title: "Global Presence",
      description: "Operating across multiple countries with expert teams"
    }
  ];

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Assignment For Bluebash
            <span className="highlight"> By Sameer Faridi</span>
          </h1>
          <p className="hero-description">
            At Bluebash, we leverage the power of technology and innovative ideas to help businesses 
            thrive in the digital world. Specializing in AI solutions, DevOps, and cutting-edge 
            software development.
          </p>
        
        </div>

        

      
      </div>
    </div>
  );
};

export default HeroSection;
