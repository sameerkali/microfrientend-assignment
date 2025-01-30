import React from "react";
import ChatApp from "./components/ChatApp.jsx";
import EmailApp from "./components/EmailApp.jsx";
import "./style.css";
import HeroSection from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
  <BrowserRouter >
        <Header />
        <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/emailApp" element={<EmailApp />} />
      <Route path="/chatApp" element={<ChatApp />} />
    </Routes>
      
      {/* <ChatApp /> */}
  </BrowserRouter>
  );
};

export default App;
