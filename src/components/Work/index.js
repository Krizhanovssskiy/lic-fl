import './style.scss';
import image from '../../img/photo-3.png';

import React from 'react';

const Work = () => {
  return (
    <li className="Work">
      <div className="Work__image-box">
        <img src={image} alt="work" className="Work__image" />
        <div className="Work__text-box">
          <h4 className="Work__name">The name of the work</h4>
          <p className="Work__description">Some description here</p>
        </div>
      </div>
    </li>
  );
};

export default Work;
