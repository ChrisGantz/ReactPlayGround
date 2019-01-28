import React from 'react';
import NavBar from './nav';

class SimpleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  reset() {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <React.Fragment>
      <div className="center-item">
        <button className='inc' onClick={() => this.increment()}>Increment!</button>
        <button className='dec' onClick={() => this.decrement()}>Decrement!</button>
        <button className='reset' onClick={() => this.reset()}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
      </React.Fragment>
    );
  }
}

export default SimpleCounter;