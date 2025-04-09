// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;