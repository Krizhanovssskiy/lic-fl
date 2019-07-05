import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import UserNav from './UserNav';
import Lang from './Lang';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header__title">
        Lic
      </Link>
      <Search />
      <div className="Header__container">
        <UserNav />
        <Lang />
      </div>
    </header>
  );
};

export default Header;
