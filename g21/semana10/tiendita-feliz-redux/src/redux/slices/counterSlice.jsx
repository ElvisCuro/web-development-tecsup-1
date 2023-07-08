import { createSlice } from "@reduxjs/toolkit";
import { readProducts } from "../thunks/counterThunk";

const initialState = {
  value: 0,
  products: []
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: state => {
      state.value--;
    },
    increment: state => {
      state.value++;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(readProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;