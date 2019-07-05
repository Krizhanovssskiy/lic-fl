import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../actions';

import GoogleAuth from '../GoogleAuth';

class Register extends Component {
  state = { username: '', isAgree: false };

  onInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const { username, isAgree } = this.state;

    if (isAgree && username) {
      this.props.registration({ username: this.state.username });
    } else {
      console.log('check the form');
    }
  };

  render() {
    return (
      <div className="Register">
        <h1 className="Register__header">Register</h1>
        <form onSubmit={this.onFormSubmit} className="Register__form">
          <input
            name="username"
            onChange={this.onInputChange}
            value={this.state.username}
            className="Register__input"
            type="text"
            placeholder="Your phone or email"
          />
          <p className="Register__description">
            You will receive a 4-digit code to use as password. You can change
            it in your account settings
          </p>
          <p className="Register__text">or</p>

          <input
            name="isAgree"
            onChange={this.onInputChange}
            checked={this.state.isAgree}
            className="Register__checkbox"
            type="checkbox"
            id="terms"
          />
          <label className="Register__label" htmlFor="terms">
            I have read and agree with the{' '}
          </label>
          <span className="Register__terms-link">Terms and Conditions</span>
          <div className="Register__footer">
            <Link to="/login" className="Register__footer-login">Log in</Link>
            <button type="submit" className="Register__footer-register">
              Register
            </button>
          </div>
        </form>
        <GoogleAuth />
      </div>
    );
  }
}

export default connect(
  null,
  { registration }
)(Register);
