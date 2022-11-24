import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from './features/slice/dataSlice';

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});
