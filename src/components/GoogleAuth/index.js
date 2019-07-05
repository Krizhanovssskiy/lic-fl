import './style.scss';
import sprite from '../../img/sprite.svg';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '134497216962-bqk95bhitu352f76bt9e07sd4iaus44r.apps.googleusercontent.com',
            // '134497216962-kb6dq2f2hmnn3bti1k7jo1a9pp9i6m7m.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;
    const icon = (
      <svg className="UserNav__icon">
        <use href={`${sprite}#icon-google`} />
      </svg>
    );
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={this.onSignOutClick}>
          <p>Sign Out</p>
          {icon}
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick}>
          <p>Sign In with Google</p>
          {icon}
        </button>
      );
    }
  }

  render() {
    return <div className="GoogleAuth">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
