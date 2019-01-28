import React from 'react';
import NavBar from './nav';

export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
      prevSubmits: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState({
      submit: this.state.input,
      prevSubmits: [...this.state.prevSubmits, this.state.input],
      input: '',
    })
    // change code above this line
  }
  render() {
    let displayInputs = this.state.prevSubmits.map((elem, index) => {
      return (
        <li key={index}>{elem}</li>
      )
    });
    let enableButton;
    if(this.state.input === '') {
      enableButton = (<button type='submit' onSubmit={this.handleSubmit} disabled >Submit!</button>);
    } else {
      enableButton = (<button type='submit' onSubmit={this.handleSubmit}>Submit!</button>)
    }

    return (
      <React.Fragment>
        <div className="center-item">
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */}
            <input type="text" value={this.state.input} onChange={this.handleChange} />
            { /* change code above this line */}
            {enableButton}
          </form>
          { /* change code below this line */}
          <h2>you have submitted this: {this.state.submit}</h2>
          { /* change code above this line */}
          <ul>
            {displayInputs}
          </ul>
        </div>
      </React.Fragment>
    );
  }
};