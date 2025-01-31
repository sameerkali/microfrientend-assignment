import React, { lazy, Suspense } from "react";
import "../style.css";
const EmailAppComp = lazy(() => import("EmailApp/EmailApp"));

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Assignment For Bluebash
            <span className="highlight"> By Sameer Faridi</span>
          </h1>
          <p className="hero-description">
            At Bluebash, we leverage the power of technology and innovative
            ideas to help businesses thrive in the digital world. Specializing
            in AI solutions, DevOps, and cutting-edge software development.
          </p>
        </div>
        <div className="email-container-hero">
          <Suspense fallback={<p>Loading...</p>}>
            <EmailAppComp />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
