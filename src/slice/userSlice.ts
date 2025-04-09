import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  user_id: "null",
  fname: "",
  lname: "",
  image: ""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogin = true
      if (action.payload.user_id !== undefined) state.user_id = action.payload.user_id;
      if (action.payload.fname !== undefined) state.fname = action.payload.fname;
      if (action.payload.lname !== undefined) state.lname = action.payload.lname;
      if (action.payload.image !== undefined) state.image = action.payload.image;

    },
    resetUser: () => initialState,
  },
});


export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
