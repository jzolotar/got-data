import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 1, pageSize: 25, lastPage: 86 };

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.page === state.lastPage) {
        state.page = 1;
      } else state.page++;
    },
    decrement: (state) => {
      if (state.page === 1) {
        state.page = state.lastPage;
      } else state.page--;
    },

    goToFirstPage: (state) => {
      state.page = 1;
    },
    goToLastPage: (state) => {
      state.page = state.lastPage;
    },
    setLastPage: (state, action) => {
      //didnt know how to get link data from headers
      if (action.payload === 10) {
        state.lastPage = 214;
      }
      if (action.payload === 25) {
        state.lastPage = 86;
      }
      if (action.payload === 10) {
        state.lastPage = 43;
      }
    },
  },
});

export const { increment, decrement, goToFirstPage, goToLastPage } =
  settingsSlice.actions;
export default settingsSlice.reducer;
