import React from 'react';

const NavMobile = () => {
  return (
    <nav className="mobile-nav">
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/toggle-button">Toggle Excersise</Link></li>
        <li><Link to="/simple-counter" >Simple Counter</Link></li>
        <li><Link to="/form/controlled-input" >Controlled input</Link></li>
        <li><Link to="/form/controlled-form" >Controlled Form</Link></li>
        <li><Link to="/form/redux-form" >Redux Form</Link></li>
        <li><Link to="/conditional-render" >Conditional Render</Link></li>
      </ul>
    </nav>
  );
};

export default NavMobile;