import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 1, pageSize: 25, lastPage: '' };

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('increment');
      if (state.page === state.lastPage) {
        state.page = 1;
      } else state.page++;
    },
    decrement: (state) => {
      console.log('increment');
      if (state.page === 1) {
        state.page = state.lastPage;
      } else state.page--;
    },
    setLastPage: (state, action) => {
      //TODO: how to get lastPage from response headers ?
      state.lastPage = action.payload;
    },
  },
});

export const { increment, decrement } = settingsSlice.actions;
export default settingsSlice.reducer;
