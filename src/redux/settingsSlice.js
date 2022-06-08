import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 1, pageSize: 25, lastPage: '' };

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } =
  settingsSlice.actions;
export default settingsSlice.reducer;
