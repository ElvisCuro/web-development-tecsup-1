import { createAsyncThunk } from "@reduxjs/toolkit";

export const readProducts = createAsyncThunk(
  'counter/readProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:1337/api/products?populate=thumbnail');
      const data = await response.json();
      return data.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);