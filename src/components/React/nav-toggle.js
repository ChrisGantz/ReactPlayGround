import React from 'react';
import NavBar from './nav';
// import "../../css-components/animate-nav.css"

const ToggleNavigation = props => {
  return (
    <div className="nav-icon">
    <button className="toggle-hamburger" onClick={() => props.handleClick()}>
      <span className="hamburger" />
      <span className="hamburger" />
      <span className="hamburger" />
    </button>
    </div>
  )
}

export default ToggleNavigation;