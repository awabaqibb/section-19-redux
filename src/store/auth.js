import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthorized: true };

const authSlice = createSlice({
  name: "authorization",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthorized = true;
    },
    logout(state) {
      state.isAuthorized = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
