import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/couterSlice';
const rootReducer = combineReducers({
  counter: counterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
