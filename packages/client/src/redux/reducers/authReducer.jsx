import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    user: false,
    userData: {},
  },
  reducers: {
    updateAuth: (state, action) => {
      const { user, userData } = action.payload;
      state.userData = { ...userData };
      state.user = user;
    },
  },
});

export const { updateAuth } = auth.actions;
export default auth.reducer;
