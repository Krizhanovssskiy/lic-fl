import './style.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import sprite from '../../../img/sprite.svg';

class UserNav extends Component {
  renderLogin() {
    if (this.props.auth) {
      return (
        <>
          <span className="UserNav__icon-label">
            {this.props.name || `id: ${this.props.user_id}`}
          </span>
          <svg className="UserNav__icon">
            <use href={`${sprite}#icon-user`} />
          </svg>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className="UserNav__login">
            Login
          </Link>
        </>
      );
    }
  }

  render() {
    return (
      <nav className="UserNav">
        <div className="UserNav__icon-box">
          <span className="UserNav__icon-label">Double selfie</span>
          <svg className="UserNav__icon--selfie">
            <use href={`${sprite}#icon-selfie`} />
          </svg>
        </div>
        <div className="UserNav__icon-box">
          <span className="UserNav__icon-label">Notifications</span>
          <svg className="UserNav__icon">
            <use href={`${sprite}#icon-bell`} />
          </svg>
        </div>
        <div className="UserNav__icon-box UserNav__icon-box--active">
          {this.renderLogin()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  const {authMysqlData} = state;
  return {
    name: authMysqlData.authData.name,
    auth: authMysqlData.auth,
    user_id: authMysqlData.authData.user_id
  };
};

export default connect(mapStateToProps)(UserNav);
