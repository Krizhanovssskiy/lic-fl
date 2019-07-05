import './style.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../actions';

import GoogleAuth from '../GoogleAuth';

class Auth extends Component {
  state = { username: '', pass: '' };

  onInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const { username, pass } = this.state;

    if (pass && username) {
      this.props.auth(this.state);
    } else {
      console.log('check the form');
    }
  };

  render() {
    return (
      <div className="Auth">
        <h1 className="Auth__header">Login</h1>
        <form onSubmit={this.onFormSubmit} className="Auth__form">
          <input
            name="username"
            onChange={this.onInputChange}
            value={this.state.username}
            className="Auth__input"
            type="text"
            placeholder="Your phone or email"
            autoComplete="username"
          />
          <input
            name="pass"
            onChange={this.onInputChange}
            value={this.state.pass}
            className="Auth__input"
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
          />
          <p className="Auth__link">Forgot your password?</p>

          <p className="Auth__text">or</p>

          <div className="Auth__footer">
            <Link to="/register" className="Auth__link">Create new account</Link>
            <button type="submit" className="Auth__footer-login">
              Login
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
  { auth }
)(Auth);
