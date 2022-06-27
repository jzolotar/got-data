import { createSlice } from '@reduxjs/toolkit';

const initialState = { filtersOn: false, gender: 'Any', culture: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFiltersOn: (state, action) => {
      state.filtersOn = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.gender = action.payload;
    },
    setCultureFilter: (state, action) => {
      state.culture = action.payload;
    },
  },
});

export const { setFiltersOn, setGenderFilter, setCultureFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;
