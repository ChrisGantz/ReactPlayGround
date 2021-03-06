import React from 'react';

class ReduxForms extends React.Component {
  render() {
    return (
      <div className="center-item-form">
        <h1 style={{order: 0}}>Survey Form</h1>
        <div className="form-container">
            <p>Let us know how to improve! <span role="img" aria-live="polite" >👏</span></p>
          <form className="redux-form">
            <div className="form-divs">
              <div className="label">
              <label for="name">Name:</label>
            </div>
              <div className="input-wrap">
              <input type="text" name="name" placeholder="John Doe" />
            </div>
            </div>
            <div className="form-divs">
              <div className="label">
              <label for="email">Email</label>
              </div>
              <div className="input-wrap">
              <input type="text" name="email" placeholder="johnDoe3@email.com" />
              </div>
            </div>
            <div className="form-divs">
              <div className="label">
              <label >Age</label>
              </div>
              <div className="input-wrap">
              <input type="number" name="age" placeholder="21" />
              </div>
            </div>
            <div className="form-divs">
              <div className="label">
                <label>What is your current role?</label>
              </div>
              <div className="input-wrap">
              <select name="occupation">
                <option value="student">Student</option>
                <option value="full-time">Full Time Job</option>
                <option value="part-time">Part Time Job</option>
                <option value="other">Other</option>
              </select>
              </div>
            </div>
            <div className="form-divs">
              <div className="label">
              <label for="radio">Would you recommend us?</label>
              </div>
              <ul className="left-25px">
                <li>
                  <label for="yes">Yes</label>
                  <input type="radio" name="recommend" value="yes" />
                </li>
                <li>
                  <label for="maybe">Maybe</label>
                  <input type="radio" name="recommend" value="maybe"/>
                </li>
                <li>
                  <label for="no">No</label>
                  <input type="radio" name="recommend" value="no" />
                </li>
              </ul>
            </div>
            <div className="form-divs">
              <div className="label">
                <label>What can we improve</label>
              </div>
              <ul className="left-25px">
                <li>
                  <label>
                    <input type="checkbox" name="improve" value="code"/>
                    Code
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="improve" value="syntax"/>
                    Syntax
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="improve" value="readibilty"/>
                    Readibilty
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="improve" value="frameworks"/>
                    Frameworks
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="improve" value="tests"/>
                    Tests
                  </label>
                </li>
              </ul>
            </div>
            <div className="form-divs">
              <div className="label">
              <label for="comments">Comments or Suggestions?</label>
              </div>
              <div className="input-wrap">
              <input type="textbox" name="comments" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReduxForms;