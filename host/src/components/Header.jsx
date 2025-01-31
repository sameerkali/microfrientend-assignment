import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import logo from "../../public/bluebash_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Bluebash" />
        </div>
        <div className="nav-buttons">
          <Link to={`emailApp`}>
            <button className="btn btn-outline">Email</button>
          </Link>
          <Link to={`chatApp`}>
            <button className="btn btn-primary">Chat</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
