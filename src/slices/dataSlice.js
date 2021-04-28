import { createSlice } from '@reduxjs/toolkit';
import { getDataFetch } from './fetch';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    isLoading: false,
    categorysOrder: [],
    category: {},
    goodsOrder: {},
    goods: {},
  },
  reducers: {},
  extraReducers: {
    [getDataFetch.pending]: state => {
      state.isLoading = true;
    },
    [getDataFetch.fulfilled]: (state, { payload }) => {
      state.categorysOrder = payload.categorysOrder;
      state.category = payload.category;
      state.goodsOrder = payload.goodsOrder;
      state.goods = payload.goods;
      state.isLoading = false;
    },
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
