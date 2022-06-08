import { configureStore } from '@reduxjs/toolkit';
import { charactersAPI } from './apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import settingsSlice from './settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    [charactersAPI.reducerPath]: charactersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersAPI.middleware),
});

setupListeners(store.dispatch);
