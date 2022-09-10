import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/couterSlice';
//나중엔 combineReducer를 써야함..
const rootReducer = combineReducers({
  counter: counterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
