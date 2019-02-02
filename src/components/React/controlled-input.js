import React from 'react';

export default class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
      // No need for bind with arrow function
    // change code above this line
  }
  // change code below this line
  handleChange = (e) => {
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
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
      </React.Fragment>
    );
  }
};