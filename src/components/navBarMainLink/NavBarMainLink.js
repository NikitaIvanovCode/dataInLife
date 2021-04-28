import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBarMainLink = () => {
  return (
    <Link to="/">
      <li className="navbar-main">Главная</li>
    </Link>
  );
};
