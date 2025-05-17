import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AmountState {
  quantity: number
}

const initialState: AmountState = {
  quantity: 1,
}

const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      if (state.quantity < action.payload) {
        state.quantity += 1
      }
    },
    decrease: (state) => {
      if (state.quantity > 0) {
        state.quantity -= 1
      }
    },
    reset: (state) => {
      state.quantity = 1
    },
  },
})

export const { increase, decrease, reset } = amountSlice.actions
export default amountSlice.reducer