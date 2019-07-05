import './style.scss';

import React from 'react';
import UserOverview from '../UserOverview';
import Features from '../Features';
import UserMainInfo from '../UserMainInfo';
import UserDetails from '../UserDetails';
// import UserContacts from '../UserContacts';

const Content = () => {
  return (
    <div className="Content">
      <div className="Content__column">
        <UserOverview />
        <UserMainInfo />
      </div>
      <div className="Content__column">
        <Features />
        <UserDetails />
      </div>
      <div className="Content__column">

      </div>
    </div>
  );
};

export default Content;
