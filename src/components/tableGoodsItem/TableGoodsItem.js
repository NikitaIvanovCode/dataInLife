import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCountCart, removeCountCart } from '../../slices/cartSlice';
import './style.css';

export const TableGoodsItem = ({ id, name, price }) => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState('');
  const dispatch = useDispatch();

  const inputHandler = value => {
    let num = value.replace(/\D/g, '').trim();
    if (num[0] == 0) num = num.slice(1);
    setCount(num);
  };

  useEffect(() => {
    setSum((count * price).toFixed(2));
    if (count !== 0) {
      dispatch(updateCountCart({ id, count, price }));
    }
    if (count === '') {
      dispatch(removeCountCart(id));
    }
  }, [count]);

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input
          className="count-input"
          value={count ? count : 0}
          type="text"
          onChange={e => inputHandler(e.target.value)}
        />
      </td>
      <td>{sum}</td>
    </tr>
  );
};
