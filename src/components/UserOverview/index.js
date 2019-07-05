import './style.scss';
import sprite from '../../img/sprite.svg';
import girl from '../../img/girl.png';
import qrCode from '../../img/qr-code.jpg';

import React from 'react';

const UserView = () => {
  return (
    <section className="UserView">
      <div className="UserView__image-box">
        <img src={girl} alt="User" className="UserView__image" />
        <div className="UserView__icon-box">
          <svg className="UserView__icon">
            <use href={`${sprite}#icon-triangle`} />
          </svg>
        </div>
      </div>
      <div className="UserView__qr-box">
        <img src={qrCode} alt="qr-code" className="UserView__qr-code" />
      </div>
    </section>
  );
};

export default UserView;
