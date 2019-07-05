import './style.scss';

import React from 'react';
import Work from '../Work';

const Portfolio = () => {
  return (
    <div className="Portfolio hide-scroll">
      <ul className="Portfolio__list">
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </ul>
    </div>
  );
};

export default Portfolio;
