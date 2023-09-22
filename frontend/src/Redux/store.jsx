import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting.reducer/greeting.slice';
import { REDUX_DEVTOOLS } from '../config/globals';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
  devTools: REDUX_DEVTOOLS || false,
});

export default store;
