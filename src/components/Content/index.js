import './style.scss';

import React from 'react';
import UserHeading from '../UserHeading';
import Features from '../Features';
import UserMainInfo from '../UserMainInfo';
import UserDetails from '../UserDetails';
import Contacts from '../Contacts';

const Content = () => {
  return (
    <div className="Content">
      <div className="Content__column">
        <UserHeading />
        <UserMainInfo />
      </div>
      <div className="Content__column">
        <Features />
        <UserDetails />
      </div>
      <div className="Content__column">
        <Contacts />
      </div>
    </div>
  );
};

export default Content;
