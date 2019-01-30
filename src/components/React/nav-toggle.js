import React from 'react';
import NavBar from './nav';

const ToggleNavigation = props => {
  if(!props.display) {
    return (
      <div className="nav-icon">
      <button className="toggle-hamburger" onClick={() => props.handleClick()}>
        <span className="hamburger" />
        <span className="hamburger" />
        <span className="hamburger" />
      </button>
      </div>
    )
  } else {
    return (<NavBar />)
  }
}

export default ToggleNavigation;