import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const getDataFetch = createAsyncThunk('data/getDataFetch', async () => {
  const res = await fetch(`${api}/get_products.php`);
  const data = await res.json();

  const categorysOrder = [];
  const category = {};
  const goodsOrder = {};
  const goods = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i].rid !== undefined) {
      categorysOrder.push(data[i].rid);
      category[data[i].rid] = {
        id: data[i].rid,
        name: data[i].rname,
      };

      const goodsIds = [];

      data[i].goods.map(item => {
        goodsIds.push(item.gid);
        goods[item.gid] = {
          id: item.gid,
          name: item.gname,
          price: item.gprice,
        };
      });

      goodsOrder[data[i].rid] = goodsIds;
    }
  }

  return { categorysOrder, category, goodsOrder, goods };
});

export const sendData = createAsyncThunk('cart/sendData', async dataCounters => {
  const formData = new FormData();
  formData.append('product', JSON.stringify(dataCounters));

  const res = await fetch(`${api}/add_basket.php`, {
    method: 'POST',
    body: formData,
  });
});
