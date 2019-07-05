import './style.scss';

import React from 'react';
import Card from '../Card';

const CardsList = () => {
  return (
    <div className="CardsList__photo-container hide-scroll">
      <ul className="CardsList__photo-list">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default CardsList;
