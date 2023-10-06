import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-store";
import cartChangerReducer from "./cart-functionality";

const store = configureStore({
  reducer: { cart: cartReducer, cartChanger: cartChangerReducer },
});

export default store;
