import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CartInfo from '../cartInfo';
import TableItem from '../tableItem';
import './style.css';

export const Table = () => {
  const { categorysOrder } = useSelector(state => state.data);
  const [renderData, setRenderData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const isIdparams = location.pathname.slice(1);
    isIdparams ? setRenderData([isIdparams]) : setRenderData(categorysOrder);
  }, [location]);

  return (
    <div className="table">
      {renderData.map(idCategory => {
        return <TableItem key={idCategory} idCategory={idCategory} />;
      })}
      <CartInfo />
    </div>
  );
};
