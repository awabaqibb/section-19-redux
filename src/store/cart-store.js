import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { showCart: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCounterState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
      console.log(state.showCart);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
