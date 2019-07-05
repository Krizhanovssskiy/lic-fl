import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Container from './Container';


const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header__title">Lic</Link>
      <Search />
      <Container />
    </header>
  );
};

export default Header;
