import React, { lazy, Suspense } from "react";
import "../style.css";
const EmailAppComp = lazy(() => import("EmailApp/EmailApp"));
const ChatAppComp = lazy(() => import("ChatApp/ChatApp"));

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
            Hi, thank you so much for this assignment! This assignment taught me
            a lot. Regardless of whether I am selected or not, I have no
            regrets. I’m truly happy to have built this. However, if I do get
            selected, I would consider myself incredibly lucky because this must
            be a great place to work. If you assign such cool tasks, I can only
            imagine that you work on exciting projects and are highly skilled.
            Whatever the outcome, I’m grateful for the opportunity.
          </p>
        </div>
        <div className="email-container-hero">
          <Suspense fallback={<p>Loading...</p>}>
            <EmailAppComp />
          </Suspense>
        </div>
        <div className="email-container-hero">
          <Suspense fallback={<p>Loading...</p>}>
            <ChatAppComp />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
