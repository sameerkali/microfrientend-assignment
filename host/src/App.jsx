import React from "react";
import "./style.css";
import HeroSection from "./components/Hero.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />;
    </div>
  );
};

export default App;
