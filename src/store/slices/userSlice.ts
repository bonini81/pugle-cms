import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state, action) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
