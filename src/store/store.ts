// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../slice/userSlice";
import searchReducer from "../slice/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;