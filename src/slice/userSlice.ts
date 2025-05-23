import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userId: null,
  fname: "",
  lname: "",
  image: "",
  birthDate: "",
  email: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogin = true
      if (action.payload.userId !== undefined) state.userId = action.payload.userId;
      if (action.payload.fname !== undefined) state.fname = action.payload.fname;
      if (action.payload.lname !== undefined) state.lname = action.payload.lname;
      if (action.payload.image !== undefined) state.image = action.payload.image;
      if (action.payload.birthDate !== undefined) state.birthDate = action.payload.birthDate;
      if (action.payload.email !== undefined) state.email = action.payload.email;

    },
    resetUser: () => initialState,
  },
});


export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
