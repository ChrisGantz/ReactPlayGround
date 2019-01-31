import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import DashBoard from './components/React/dashboard';
import ToggleButton from './components/React/toggle-button';
import SimpleCounter from './components/React/simple-counter';
import ControlledInput from './components/React/controlled-input';
import ControlledForm from './components/React/controlled-from';
import CheckUserAge from './components/React/conditional-render';
import FormikCom from './components/React/formik';
import NavBar from './components/React/nav';
import ReduxForms from './components/Redux/redux-form';
import ToggleNavigation from './components/React/nav-toggle';
import BackDrop from './components/React/backdrop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    }
  }
  // should have called it something like handleDisplay
  handleClick() {
    this.setState(prevState => {
      return {display: !prevState.display}
    })
  }
  // better to make new handler for backdrop because it shouldnt be able to toggle turn false
  // this way of creating methods keeps you from using bind or arrow function in render useful for optimization
  handleBackDropClose = () => {
    this.setState({display: false})
  }

  render() {
    return (
      <main style={{height: "100vh"}}>
        <ToggleNavigation display={this.state.display} handleClick={() => this.handleClick()} />
        {this.state.display && <NavBar/>}
        {this.state.display && <BackDrop handleClick={this.handleBackDropClose} />}
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/toggle-button" component={ToggleButton} />
        <Route exact path="/simple-counter" component={SimpleCounter} />
        <Route exact path="/form/controlled-input" component={ControlledInput} />
        <Route exact path="/form/controlled-form" component={ControlledForm} />
        <Route exact path="/form/redux-form" component={ReduxForms} />
        <Route exact path="/conditional-render" component={CheckUserAge} />
      </main>
    );
  }
}

export default withRouter(App);
