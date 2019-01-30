import React from 'react';
import "../../css-components/backdrop.css"

const BackDrop = (props) => {
  return (
    <div className="backdrop" onClick={() => {props.handleClick()}}>
      
    </div>
  );
};

export default BackDrop;