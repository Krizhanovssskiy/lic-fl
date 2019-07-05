import './style.scss';

import React from 'react';

import UserNav from '../UserNav';
import Lang from '../Lang';

const Container = () => {
  return (
    <div className="Container">
      <UserNav />
      <Lang />
    </div>
  );
};

export default Container;
