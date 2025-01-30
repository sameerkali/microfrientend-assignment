import React from "react";
import ChatApp from "./components/ChatApp.jsx";
import EmailApp from "./components/EmailApp.jsx";
import "./style.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
        <div className="section">
          <ChatApp />
        </div>
        <div className="section">
          <EmailApp />
        </div>
      </div>
    </div>
  );
};

export default App;
