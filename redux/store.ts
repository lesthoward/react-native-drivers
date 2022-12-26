import { configureStore } from '@reduxjs/toolkit';
import navSlice from './slices/navSlice';


export const store = configureStore({
  reducer: {
    nav: navSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;