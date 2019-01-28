import React, { Component } from 'react';
import NavBar from './nav';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '85%',    
}
class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={style} >Pick your example!</h1>
      </React.Fragment>
    );
  }
}

export default DashBoard;