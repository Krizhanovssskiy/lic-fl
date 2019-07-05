import './style.scss';
import sprite from '../../img/sprite.svg';
import girl from '../../img/girl.png';

import React from 'react';

const Contact = () => {
  return (
    <li className="Contact">
      <div className="Contact__contact-box">
        <div className="Contact__image-box">
          <img src={girl} alt="contact" className="Contact__image" />
        </div>
        <div className="Contact__text-box">
          <h4 className="Contact__name">Konstancia Algremonto</h4>
          <p className="Contact__spec" />
          <p className="Contact__contact">+79814028502</p>
          <p className="Contact__contact">https://design.lic.bz</p>
        </div>
      </div>
      <div className="Contact__icon-box">
        <svg className="Contact__icon">
          <use href={`${sprite}#icon-contacts-envelop`} />
        </svg>
      </div>
    </li>
  );
};

export default Contact;
