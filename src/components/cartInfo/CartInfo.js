import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendData } from '../../slices/fetch';
import './style.css';

export const CartInfo = () => {
  const { count, sum, cartDataCounters } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [isSendBtn, setIsSendBtn] = useState(true);

  useEffect(() => {
    Object.keys(cartDataCounters).length > 0 ? setIsSendBtn(false) : setIsSendBtn(true);
  }, [cartDataCounters]);

  return (
    <div className="cart-info">
      <div className="cart-info-wrapp">
        <div>Сумма: {sum.toFixed(2)}</div>
        <div className="cart-info__right">
          <div>Кол-во: {count}</div>
          <button disabled={isSendBtn} onClick={() => dispatch(sendData(cartDataCounters))}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
