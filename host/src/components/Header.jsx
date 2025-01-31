import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import logo from "../../public/bluebash_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="https://www.bluebash.co/" target="_blank">
            <img src={logo} alt="Bluebash" />
          </a>
        </div>
        <div className="nav-buttons">


        <a
            href="https://github.com/sameerkali/microfrientend-assignment"
            target="_blank"
          >
            <button className="btn btn-outline">Github</button>
          </a>


          <a
            href="https://github.com/sameerkali/microfrientend-assignment/blob/main/README.md"
            target="_blank"
          >
            <button className="btn btn-outline">How to Setup Locally</button>
          </a>
          <a href="https://linkedin.com/in/sameer-faridi" target="_blank">
            <button className="btn btn-primary">About Sameer Faridi</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
