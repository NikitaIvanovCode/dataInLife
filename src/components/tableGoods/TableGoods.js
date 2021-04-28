import React from 'react';
import { useSelector } from 'react-redux';
import TableGoodsItem from '../tableGoodsItem';

export const TableGoods = ({ idCategory }) => {
  const { goodsOrder, goods } = useSelector(state => state.data);

  return (
    <>
      {goodsOrder[idCategory].map(goodId => {
        const id = goods[goodId].id;
        const name = goods[goodId].name;
        const price = goods[goodId].price;
        return <TableGoodsItem key={goodId} id={id} name={name} price={price} />;
      })}
    </>
  );
};
