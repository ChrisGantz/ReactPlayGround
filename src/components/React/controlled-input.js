import React from 'react';
import NavBar from './nav';

export default class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  // change code above this line
  render() {
    return (
      <React.Fragment>
      <div className="center-item">
        { /* change code below this line */}
        <input type="text" value={this.state.input} onChange={(e) => this.handleChange(e)} />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
      </React.Fragment>
    );
  }
};