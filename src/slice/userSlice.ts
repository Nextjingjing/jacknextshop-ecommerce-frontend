import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  fname: "",
  lname: "",
  profile: ""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload.fname !== undefined) state.fname = action.payload.fname;
      if (action.payload.lname !== undefined) state.lname = action.payload.lname;
      if (action.payload.profile !== undefined) state.profile = action.payload.profile;

    },
    resetUser: () => initialState,
  },
});


export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
