import { createSlice } from "@reduxjs/toolkit";

type TokenState = {
  currentToken: string;
};

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    currentToken: "",
  } as TokenState,
  reducers: {
    setCurrentToken: (state, action) => {
      state.currentToken = action.payload;
    },
    removeToken: (state) => {
      state.currentToken = "";
    },
  },
});

export const { setCurrentToken, removeToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
