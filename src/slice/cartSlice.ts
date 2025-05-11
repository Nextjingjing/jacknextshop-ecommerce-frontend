import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE } from "../constants/api";

export interface Product {
  productId: number;
  name: string;
  price: number;
  image: string;
  amount: number;
}

export interface CartState {
  items: Product[];
  status: "idle" | "loading" | "failed";
}

const initialState: CartState = {
  items: [],
  status: "idle",
};

export const fetchCart = createAsyncThunk<Product[]>(
  "cart/fetchCart",
  async () => {
    const res = await axios.get(`${API_BASE}/api/cart`, {
      withCredentials: true,
    });
    return res.data.products as Product[];
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    clearItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "idle";
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
