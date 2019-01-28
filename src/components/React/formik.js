import React from 'react';
import { withFormik, Form } from 'formik'
// import Yup from 'yup'

class FormikCom extends React.Component {
  render() {
    return (
      <div>
        <h1>Survey Form</h1>
        <div className="form-container">
            <p>Let us know how to improve! <span role="img" aria-live="polite" >👏</span></p>
          <form>
            <div>
              <label for="name">Name:</label>
              <input type="name" name="name" placeholder="John Doe" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="johnDoe3@email.com" />
            </div>
            <div>
              <label>Age</label>
              <input type="age" name="age" placeholder="21" />
            </div>
            <div>
              <label>What is your current role?</label>
              <input />
            </div>
            <div>
              <label>Would you recommend us?</label>
              <input />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const formikCom = withFormik({
  mapPropsToValues() {
    return {
      //key input name and value
      name: '',
      email: ''
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(FormikCom)

export default FormikCom;