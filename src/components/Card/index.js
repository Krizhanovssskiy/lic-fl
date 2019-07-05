import './style.scss';
import photo1 from '../../img/photo-1.png';

import React from 'react';

const Card = () => {
  return (
    <li className="Card">
      <div className="Card__photo-box">
        <img className="Card__photo" src={photo1} alt="Services" />
      </div>
      <p className="Card__name">City guide</p>
    </li>
  );
};

export default Card;
