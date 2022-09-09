import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from './couterSlice';
const rootReducer = combineReducers({
  counterSlice,
});
// export * from './couterSlice';
