import './style.scss';

import sprite from '../../../img/sprite.svg';

import React from 'react';

const Search = () => {
  return (
    <form className="Search">
      <button className="Search__button">
        <svg className="Search__icon Search__icon-magnifying-glass">
          <use href={`${sprite}#icon-magnifying-glass`} />
        </svg>
      </button>
      <input type="text" className="Search__input" placeholder="Find your best" />
      <button className="Search__button">
        <svg className="Search__icon Search__icon-cross">
          <use href={`${sprite}#icon-cross`} />
        </svg>
      </button>
    </form>
  );
}

export default Search;
