import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/couterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
