import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';

export const NavBarItem = ({ id }) => {
  const { category } = useSelector(state => state.data);

  return (
    <Link to={`/${id}`}>
      <li className="navbar-item">{category[id].name}</li>
    </Link>
  );
};
