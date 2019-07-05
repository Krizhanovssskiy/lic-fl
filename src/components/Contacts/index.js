import './style.scss';

import sprite from '../../img/sprite.svg';

import React from 'react';
import Contact from '../Contact';
import CardsList from '../CardsList';

const Contacts = () => {
  return (
    <section className="Contacts">
      <div className="Contacts__header">
        <div className="Contacts__title-box">
          <h3 className="Contacts__title">Contacts</h3>
          <span className="Contacts__quantity">145</span>
        </div>
        <div className="Contacts__icons-box">
          <svg className="Contacts__icon Contacts__icon--active">
            <use href={`${sprite}#icon-contacts-pause`} />
          </svg>
          <svg className="Contacts__icon">
            <use href={`${sprite}#icon-contacts-menu`} />
          </svg>
          <svg className="Contacts__icon">
            <use href={`${sprite}#icon-contacts-chevron-left`} />
          </svg>
          <svg className="Contacts__icon">
            <use href={`${sprite}#icon-contacts-chevron-right`} />
          </svg>
        </div>
      </div>
      <CardsList />
      <ul className="Contacts__list">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </ul>
    </section>
  );
};

export default Contacts;
