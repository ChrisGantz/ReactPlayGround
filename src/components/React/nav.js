import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navigation">
      <div></div>
      <nav className="nav-bar">
        <span className="nav-logo" role="img" area-label="nerd emoji">🤓</span>
        <div className="nav-list">
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/toggle-button">Toggle Excersise</Link></li>
            <li><Link to="/simple-counter" >Simple Counter</Link></li>
            <li><Link to="/form/controlled-input" >Controlled input</Link></li>
            <li><Link to="/form/controlled-form" >Controlled Form</Link></li>
            <li><Link to="/form/redux-form" >Redux Form</Link></li>
            <li><Link to="/conditional-render" >Conditional Render</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;