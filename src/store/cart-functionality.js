import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { itemsAmount: 0 };

const cartChanger = createSlice({
  name: "cartChanger",
  initialState: initialCartState,
  reducers: {
    itemAdd(state) {
      state.itemsAmount++;
    },

    itemRemove(state) {
      state.itemsAmount--;
    },
  },
});

export const cartChangerActions = cartChanger.actions;
export default cartChanger.reducer;
