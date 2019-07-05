import './style.scss';
import sprite from '../../img/sprite.svg';
import girl from '../../img/girl.png';
import qrCode from '../../img/qr-code.jpg';

import React from 'react';

const UserHeading = () => {
  return (
    <section className="UserHeading">
      <div className="UserHeading__image-box">
        <img src={girl} alt="User" className="UserHeading__image" />
        <div className="UserHeading__icon-box">
          <svg className="UserHeading__icon">
            <use href={`${sprite}#icon-triangle`} />
          </svg>
        </div>
      </div>
      <div className="UserHeading__qr-box">
        <img src={qrCode} alt="qr-code" className="UserHeading__qr-code" />
      </div>
    </section>
  );
};

export default UserHeading;
