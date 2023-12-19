import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    currentToken: null,
  },
  reducers: {
    setCurrentToken: (state, action) => {
      state.currentToken = action.payload;
    },
    removeToken: (state, action) => {
      state.currentToken = null;
    },
  },
});

export const { setCurrentToken, removeToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
