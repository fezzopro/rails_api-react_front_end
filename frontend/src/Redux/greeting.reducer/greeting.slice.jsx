import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../config/globals';

const initialState = {
  greeting: {},
  isLoading: true,
};

export const fetchMessage = createAsyncThunk(('greeting/fetchMessage'), () => (
  axios
    .get(API_URL)
    .then((response) => response.data)
));

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting: (state, { payload }) => {
      state.greeting = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
