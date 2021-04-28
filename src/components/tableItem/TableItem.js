import React from 'react';
import { useSelector } from 'react-redux';
import TableGoods from '../tableGoods';

export const TableItem = ({ idCategory }) => {
  const { category } = useSelector(state => state.data);

  return (
    <table>
      <caption>
        <h2>{category[idCategory].name}</h2>
      </caption>

      <tbody>
        <TableGoods idCategory={idCategory} />
      </tbody>
    </table>
  );
};
