import { configureStore } from '@reduxjs/toolkit';
import { charactersAPI } from './apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import settingsSlice from './settingsSlice';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    filters: filterSlice,
    [charactersAPI.reducerPath]: charactersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersAPI.middleware),
});

setupListeners(store.dispatch);
