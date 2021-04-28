import React from 'react';
import { useSelector } from 'react-redux';
import NavBarMainLink from '../navBarMainLink';
import NavBarItem from '../navBarItem';
import './style.css';

export const NavBar = () => {
  const { categorysOrder } = useSelector(state => state.data);

  return (
    <ul className="navBar">
      <NavBarMainLink />
      {categorysOrder.map(id => {
        return <NavBarItem key={id} id={id} />;
      })}
    </ul>
  );
};
