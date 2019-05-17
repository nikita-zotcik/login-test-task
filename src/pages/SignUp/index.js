import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import axios from 'axios';

import PhoneInputNumber from '../../components/PhoneNumberInput';
import { input, passwordInput, select, registrationValidate, warn } from '../../components/RenerdField';
import './styles.scss';


class SignUp extends Component {

  submit = values => {
    axios.get('/signup.json')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  };


  render() {
    const { handleSubmit, syncErrors } = this.props;

    return (
      <div className="signup-page">
        <form onSubmit={handleSubmit(this.submit)}>
          <div className="signup-form">
            <h1>Sign Up</h1>
            <div className="signup-row">
            <Field name="firstName" type="text" component={input} label="First name" placeholder="Your first name"/>
            <Field name="lastName" type="text" component={input} label="Last name" placeholder="Your last name"/>
            </div>
            <Field name="email" type="email" component={input} label="Email" placeholder="Your company email"/>
            <div className="signup-row">
            <Field name="country" component={select} label="Country"/>
            <PhoneInputNumber />
            </div>
            <Field name="password" type="password" component={passwordInput} label="Your password" placeholder="Your password"/>

            <button className={`signup-button ${!syncErrors ? 'active' : ''}`} disabled={syncErrors} type="submit">
              <div className="signup-button-label">
                Continue
              </div>
            </button>

          </div>
          <div className="signup-description_container">
          <div className="signup-description">
            <p>Already have an account?</p>
          </div>
          <div className="signup-link">
            <Link to='/'>
              <span>Sign In</span>
            </Link>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    syncErrors: state.form.registrationForm.syncErrors
  };
};

export default reduxForm({
  form: 'registrationForm',
  validate: registrationValidate,
  warn
})(connect(
  mapStateToProps
)(SignUp))
