import React, { Component } from 'react'

import visible from '../../assets/visible.svg';
import hidden from '../../assets/hidden.svg';
import './styles.scss';

export const registrationValidate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Field is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Field is required';
  }

  if (!values.email) {
    errors.email = 'Field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.country) {
    errors.country = 'Field is required';
  }


  if (!values.password) {
    errors.password = 'Field is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  } else if (!values.password.match(/\d+/)) {
    errors.password = 'The password must contain at least one digit';
  } else if (values.password === values.password.toLowerCase()) {
    errors.password = 'The password must contain at least one capital letter';
  }


  return errors
};

export const loginValidate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Field is required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  }


  return errors
};

export const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};

export const input = ({
                        input,
                        label,
                        type,
                        placeholder,
                        meta: { touched, error, warning }
                      }) => (
  <div className="input-container">
    <div className="label-container">
      <label>{label}</label>
    </div>
    <div>
      <div className={`render-input ${touched && error ? 'error' : ''}`}>
        <input {...input} placeholder={placeholder} type={type}/>

      </div>
      <div className="error-field-container">
        {
          touched &&
          ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
        }
      </div>
    </div>
  </div>
);


const countries = ['Russia', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados'];

export const select = ({
                         input,
                         label,
                         type,
                         placeholder,
                         meta: { touched, error, warning }
                       }) => (
  <div className="input-select-block">
    <div className="label-container">
      <label>{label}</label>
    </div>
    <div>
      <div className={`render-select ${touched && error ? 'error' : ''}`}>
        <select {...input} >
          <option value="">Choose your country</option>
          {
            countries.map((country, index) => <option key={`country-${index}`} value={country}>{country}</option>)
          }
        </select>
      </div>
      <div className="error-field-container">
        <br/>
        {
          touched &&
          ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
        }
      </div>
    </div>
  </div>
);


export class passwordInput extends Component {
  state = {
    type: 'password'
  };

  changeType = () => {
    const { type } = this.state;

    if (type === 'password') {
      this.setState({ type: 'text' });
    } else {
      this.setState({ type: 'password' });
    }
  };

  render() {

    const { input, label, placeholder, meta: { touched, error, warning } } = this.props;
    const { type } = this.state;

    return (
      <div>
        <div className="label-container">
          <label>{label}</label>
        </div>
        <div>
          <div className={`render-input ${touched && error ? 'error' : ''}`}>
            <input {...input} placeholder={placeholder} type={type}/>
            <img className="input-image" src={type === 'password' ? hidden : visible} alt="" onClick={this.changeType}/>
          </div>
          <div className="error-field-container">
            <br/>
            {
              touched &&
              ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
            }
          </div>
        </div>
      </div>
    )
  }
}
