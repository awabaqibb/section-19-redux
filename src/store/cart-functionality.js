import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { itemsAmount: 0, items: [] };

const cartChanger = createSlice({
  name: "cartChanger",
  initialState: initialCartState,
  reducers: {
    itemAdd(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.itemsAmount++;

      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          description: newItem.description,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },

    itemRemove(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => id === item.id);
      state.itemsAmount--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartChangerActions = cartChanger.actions;
export default cartChanger.reducer;
