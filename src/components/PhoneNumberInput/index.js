import React, { Component } from 'react';
import './styles.scss';
import InputMask from 'react-input-mask';

export default class PhoneInputNumber extends Component {
  state = {
    inputValue: '',
    touched: false,
  };

  checkNumber = (evt) => {
    const phone = evt.target.value;

    this.setState({
      inputValue: phone
    });
  };

  setTouched = () => {
    this.setState({ touched: true });
  };

  isValid = () => {
    const { inputValue } = this.state;

    return inputValue && inputValue.search('_') === -1
  };

  render() {
    const { touched } = this.state;
    // const { callbackFunc } = this.props;

    return (
      <div className='inputWrapper' onFocus={this.setTouched}>
        <div className="label-container">
          <label className='inputWrapper__label' htmlFor="#InputPhone">Phone number</label>
        </div>
        <div className={`inputWrapper__input inputPhone ${touched && !this.isValid()? 'error' : ''}`}>
          <span>+7</span>
          <InputMask mask='(999) 999-99-99' onChange={this.checkNumber}>
            {() => {
              return (
                <input id="InputPhone" placeholder='(___) ___-__-__' type="tel"/>
              );
            }}
          </InputMask>
        </div>
        <div className="error-field-container">
          {
            touched && !this.isValid() && (<span>Field is required</span>)
          }
        </div>
      </div>
    );
  }
}
