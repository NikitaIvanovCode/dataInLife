import { createSlice } from '@reduxjs/toolkit';

const update = sumData => {
  const result = Object.keys(sumData).reduce((prev, key) => {
    return prev + Number(sumData[key]);
  }, 0);

  return result;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0,
    sum: 0,
    cartDataCounters: {},
    sumGood: {},
  },
  reducers: {
    updateCountCart: (state, { payload }) => {
      state.cartDataCounters[payload.id] = payload.count;
      state.sumGood[payload.id] = Number(payload.price) * Number(payload.count);
      state.count = update(state.cartDataCounters);
      state.sum = update(state.sumGood);
    },
    removeCountCart: (state, { payload }) => {
      delete state.cartDataCounters[payload];
      delete state.sumGood[payload];
      state.sum = update(state.sumGood);
    },
  },
  extraReducers: {},
});

export const { updateCountCart, removeCountCart } = cartSlice.actions;

export default cartSlice.reducer;
