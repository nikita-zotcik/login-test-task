import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import { input, passwordInput, loginValidate, warn } from '../../components/RenerdField';
import './styles.scss';

class SignIn extends Component {

  submit = values => {
    axios.get('/signin.json')
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
      <div className="signin-page">
        <form onSubmit={handleSubmit(this.submit)}>
          <div className="signin-form">
            <h1>Sign In</h1>

            <Field name="email" type="email" component={input} label="Email" placeholder="Your company email"/>
            <Field name="password" type="password" component={passwordInput} label="Your password"
                   placeholder="Your password"/>

            <button className={`signup-button ${!syncErrors ? 'active' : ''}`} disabled={syncErrors} type="submit">
              <div className="signup-button-label">
                Sign in
              </div>
            </button>

            <div className="signin-description_container">
              <div className="signin-description">
                <p>Don't have an account?</p>
              </div>
              <div className="signin-link">
                <Link to='signup'>
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    syncErrors: state.form.loginForm.syncErrors
  };
};


export default reduxForm({
  form: 'loginForm',
  validate: loginValidate,
  warn
})(connect(
  mapStateToProps
)(SignIn))
