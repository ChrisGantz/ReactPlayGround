import React from 'react';
import NavBar from './nav';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    // With => you no longer need bind
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    })
  }
  // change code above this line
  render() {
    return (
      <React.Fragment>
        <div className="toggle-button">
          <button onClick={() => this.toggleVisibility()}>Click Me</button>
          {this.state.visibility && <h1>Now You see me</h1>}
        </div>
      </React.Fragment>
    );
  }
};

export default ToggleButton;