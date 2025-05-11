// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../slice/userSlice";
import searchReducer from "../slice/searchSlice";
import cartReducer from "../slice/cartSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    search: searchReducer
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;