import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: ""
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.input = action.payload;
    },
    resetSearch: () => initialState,
  },
});


export const { setSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
